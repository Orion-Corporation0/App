import pool from '../data/bd.js';

const recoveryCodes = new Map();

function normalizePhone(value = '') {
  return String(value).replace(/\D/g, '');
}

function publicCandidate(candidate) {
  return {
    idCandidato: candidate.idCandidato,
    nome: candidate.nome,
    email: candidate.email,
    telefone: candidate.telefone,
    dataNascimento: candidate.dataNascimento,
    status: candidate.status,
  };
}

export async function registrarCandidato(req, res) {
  try {
    const { nome, email, telefone, senha, dataNascimento, idLocalizacao, sobreMim } = req.body;
    const normalizedPhone = normalizePhone(telefone);

    if (!nome || !email || !normalizedPhone || !senha) {
      return res.status(400).json({ erro: 'Nome, e-mail, telefone e senha são obrigatórios.' });
    }
    const [existing] = await pool.query(
      'SELECT idCandidato FROM Candidato WHERE email = ? OR telefone = ?',
      [email.trim().toLowerCase(), normalizedPhone],
    );
    if (existing.length) {
      return res.status(409).json({ erro: 'E-mail ou telefone já cadastrado.' });
    }

    const [result] = await pool.query(
      `INSERT INTO Candidato
        (nome, email, telefone, dataNascimento, senha, idLocalizacao, sobreMim, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome.trim(), email.trim().toLowerCase(), normalizedPhone, dataNascimento || null, senha, idLocalizacao || 1, sobreMim || null, 'ATIVO'],
    );

    const candidate = { idCandidato: result.insertId, nome: nome.trim(), email, telefone: normalizedPhone, status: 'ATIVO' };
    return res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!', candidato: candidate });
  } catch (error) {
    console.error('Erro ao registrar candidato:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

export async function loginCandidato(req, res) {
  try {
    const { telefone, senha } = req.body;
    const normalizedPhone = normalizePhone(telefone);

    if (!normalizedPhone || !senha) {
      return res.status(400).json({ erro: 'Telefone e senha são obrigatórios.' });
    }

    let [rows] = await pool.query('SELECT * FROM Candidato WHERE telefone = ? LIMIT 1', [normalizedPhone]);
    if (!rows.length) {
      [rows] = await pool.query('SELECT * FROM Candidato WHERE telefone = ? LIMIT 1', [String(telefone)]);
    }
    const candidate = rows[0];
    if (!candidate || senha !== candidate.senha) {
      return res.status(401).json({ erro: 'Telefone ou senha inválidos.' });
    }

    return res.json({ mensagem: 'Login efetuado com sucesso!', candidato: publicCandidate(candidate) });
  } catch (error) {
    console.error('Erro no login do candidato:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

export async function listarCandidatos(_req, res) {
  try {
    const [candidates] = await pool.query('SELECT idCandidato, nome, email, telefone, dataNascimento, status FROM Candidato');
    return res.json(candidates);
  } catch (error) {
    console.error('Erro ao listar candidatos:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

export async function getProfile(req, res) {
  try {
    const candidateId = Number(req.params.id);
    const [rows] = await pool.query(
      `SELECT c.idCandidato, c.nome, c.email, c.telefone, c.dataNascimento, c.sobreMim, c.status,
              r.idCurriculo, r.genero, r.objetivo, r.resumo, r.curriculoArquivo
       FROM Candidato c LEFT JOIN Curriculo r ON r.idCandidato = c.idCandidato
       WHERE c.idCandidato = ?`,
      [candidateId],
    );
    if (!rows[0]) return res.status(404).json({ erro: 'Candidato não encontrado.' });
    const candidate = rows[0];
    let resume = {};
    if (candidate.resumo) {
      try { resume = JSON.parse(candidate.resumo); } catch { resume = { descricao: candidate.resumo }; }
    }
    return res.json({
      ...candidate,
      ...resume,
      resume: candidate.curriculoArquivo || null,
      formations: resume.education ? [{ course: resume.education, institution: '', year: '' }] : [],
      experiences: resume.experiencias ? [{ role: resume.trabalho || 'Experiência profissional', company: resume.nomeEmpresa || '', duration: resume.tempoTrabalhado || resume.experiencias }] : [],
      jobHistory: [],
    });
  } catch (error) {
    console.error('Erro ao carregar perfil:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

export async function updateProfile(req, res) {
  try {
    const candidateId = Number(req.params.id);
    const allowed = { nome: 'nome', email: 'email', telefone: 'telefone', dataNascimento: 'dataNascimento', sobreMim: 'sobreMim' };
    const fields = Object.keys(allowed).filter((key) => req.body[key] !== undefined);
    if (!fields.length) return res.status(400).json({ erro: 'Nenhum dado para atualizar.' });

    const values = fields.map((key) => key === 'telefone' ? normalizePhone(req.body[key]) : req.body[key]);
    const setClause = fields.map((key) => `${allowed[key]} = ?`).join(', ');
    await pool.query(`UPDATE Candidato SET ${setClause} WHERE idCandidato = ?`, [...values, candidateId]);
    return getProfile(req, res);
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

export async function saveResume(req, res) {
  try {
    const candidateId = Number(req.params.id);
    const data = req.body;
    const summary = JSON.stringify({
      age: data.age || null,
      education: data.education || null,
      cep: data.cep || null,
      descricao: data.descricao || null,
      experiencias: data.experiencias || null,
      quantidadeEmpresas: data.quantidadeEmpresas || null,
      nomeEmpresa: data.nomeEmpresa || null,
      tempoTrabalhado: data.tempoTrabalhado || null,
      nuncaTrabalhei: Boolean(data.nuncaTrabalhei),
      trabalho: data.trabalho || null,
      atividades: data.atividades || [],
      tempoExperiencia: data.tempoExperiencia || null,
      certificacao: data.certificacao || null,
    });
    const [existing] = await pool.query('SELECT idCurriculo FROM Curriculo WHERE idCandidato = ? LIMIT 1', [candidateId]);
    if (existing[0]) {
      await pool.query(
        'UPDATE Curriculo SET genero = ?, objetivo = ?, resumo = ?, dataAtualizacao = NOW() WHERE idCurriculo = ?',
        [data.gender || null, data.trabalho || null, summary, existing[0].idCurriculo],
      );
    } else {
      await pool.query(
        'INSERT INTO Curriculo (idCandidato, genero, objetivo, resumo, dataAtualizacao) VALUES (?, ?, ?, ?, NOW())',
        [candidateId, data.gender || null, data.trabalho || null, summary],
      );
    }
    return getProfile(req, res);
  } catch (error) {
    console.error('Erro ao salvar currículo:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

export async function getHome(req, res) {
  try {
    const candidateId = Number(req.params.id);
    const [candidateRows] = await pool.query(
      `SELECT c.idCandidato, c.nome, c.email, c.telefone,
              EXISTS(SELECT 1 FROM Curriculo r WHERE r.idCandidato = c.idCandidato) AS temCurriculo
       FROM Candidato c WHERE c.idCandidato = ?`,
      [candidateId],
    );
    if (!candidateRows[0]) return res.status(404).json({ erro: 'Candidato não encontrado.' });
    const [jobs] = await pool.query(
      `SELECT v.idVaga, v.titulo, e.razaoSocial AS empresa, l.cidade,
              v.salario, v.carga_horaria AS horario, v.descricao
       FROM Vaga v
       LEFT JOIN Empresa e ON e.idEmpresa = v.idEmpresa
       LEFT JOIN Localizacao l ON l.idLocalizacao = v.idLocalizacao
       WHERE v.status = 'ATIVA'
       ORDER BY v.dataPublicacao DESC, v.idVaga DESC LIMIT 20`,
    );
    return res.json({ candidato: candidateRows[0], vagas: jobs, notificacoes: [] });
  } catch (error) {
    console.error('Erro ao carregar home:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

export async function listarVagas(_req, res) {
  try {
    const [jobs] = await pool.query(
      `SELECT v.idVaga, v.titulo, e.razaoSocial AS empresa, l.cidade,
              v.salario, v.carga_horaria AS horario, v.descricao
       FROM Vaga v
       LEFT JOIN Empresa e ON e.idEmpresa = v.idEmpresa
       LEFT JOIN Localizacao l ON l.idLocalizacao = v.idLocalizacao
       WHERE v.status = 'ATIVA'
       ORDER BY v.dataPublicacao DESC, v.idVaga DESC LIMIT 50`,
    );
    return res.json(jobs);
  } catch (error) {
    console.error('Erro ao listar vagas:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

export function requestPasswordCode(req, res) {
  const phone = normalizePhone(req.body.telefone);
  if (!phone) return res.status(400).json({ erro: 'Telefone é obrigatório.' });
  const code = String(Math.floor(1000 + Math.random() * 9000));
  recoveryCodes.set(phone, { code, expiresAt: Date.now() + 10 * 60 * 1000 });
  return res.json({ mensagem: 'Código gerado. Verifique seu canal de recuperação.', codigo: code });
}

export function verifyPasswordCode(req, res) {
  const phone = normalizePhone(req.body.telefone);
  const recovery = recoveryCodes.get(phone);
  if (!recovery || recovery.expiresAt < Date.now() || recovery.code !== String(req.body.codigo)) {
    return res.status(400).json({ erro: 'Código inválido ou expirado.' });
  }
  return res.json({ verificado: true });
}

export async function resetPassword(req, res) {
  const phone = normalizePhone(req.body.telefone);
  const recovery = recoveryCodes.get(phone);
  if (!recovery || recovery.expiresAt < Date.now() || recovery.code !== String(req.body.codigo)) {
    return res.status(400).json({ erro: 'Código inválido ou expirado.' });
  }
  if (!req.body.senha) return res.status(400).json({ erro: 'A senha é obrigatória.' });
  const [result] = await pool.query('UPDATE Candidato SET senha = ? WHERE telefone = ?', [req.body.senha, phone]);
  recoveryCodes.delete(phone);
  if (!result.affectedRows) return res.status(404).json({ erro: 'Telefone não encontrado.' });
  return res.json({ mensagem: 'Senha alterada com sucesso.' });
}
