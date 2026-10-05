import pool from '../data/bd.js'; 

export const registrarEmpresa = async (req, res) => {
  try {
    const { cnpj, senha, razaoSocial, segmento, telefone, email } = req.body;
      
    if (!cnpj || !senha || !razaoSocial) {
      return res.status(400).json({ erro: "CNPJ, Senha e Razão Social são obrigatórios." });
    }

    const [empresaExiste] = await pool.query('SELECT * FROM Empresa WHERE cnpj = ?', [cnpj]);
    if (empresaExiste.length > 0) {
      return res.status(409).json({ erro: "Este CNPJ já está cadastrado." });
    }

    // Nota: O seu modelo de banco inclui colunas como email, telefone, idLocalizacao, sobreEmpresa[cite: 17]. 
    // Adapte este INSERT se quiser gravar esses campos diretamente.
    const [resultado] = await pool.query(
      'INSERT INTO Empresa (cnpj, senha, razaoSocial, segmento, telefone, email, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [cnpj, senha, razaoSocial, segmento || null, telefone || null, email || null, "ATIVO"]
    );

    return res.status(201).json({  
      mensagem: "Empresa cadastrada com sucesso!",  
      empresa: { idEmpresa: resultado.insertId, razaoSocial }
    });
  } catch (error) {
    console.error("Erro ao registrar empresa:", error);
    return res.status(500).json({ erro: "Erro interno no servidor." });
  }
};

export const loginEmpresa = async (req, res) => {
  try {
    const { cnpj, senha } = req.body;

    if (!cnpj || !senha) {
      return res.status(400).json({ erro: "CNPJ e senha são obrigatórios." });
    }

    const [empresas] = await pool.query(
      'SELECT * FROM Empresa WHERE cnpj = ? AND senha = ?', 
      [cnpj, senha]
    );

    if (empresas.length === 0) {
      return res.status(401).json({ erro: "CNPJ ou senha inválidos." });
    }

    const empresa = empresas[0];

    return res.status(200).json({  
      mensagem: "Login efetuado com sucesso!",  
      empresa: { idEmpresa: empresa.idEmpresa, razaoSocial: empresa.razaoSocial }
    });
  } catch (error) {
    console.error("Erro no login da empresa:", error);
    return res.status(500).json({ erro: "Erro interno no servidor." });
  }
};

export const listarEmpresas = async (req, res) => {
  try {
    const [empresas] = await pool.query('SELECT idEmpresa, cnpj, razaoSocial, segmento, telefone, email, status FROM Empresa');
    return res.status(200).json(empresas);
  } catch (error) {
    console.error("Erro ao listar empresas:", error);
    return res.status(500).json({ erro: "Erro interno no servidor." });
  }
};