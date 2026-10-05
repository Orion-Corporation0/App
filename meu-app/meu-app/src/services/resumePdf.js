function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function renderList(items, renderItem) {
  if (!items?.length) return '';
  return `<ul>${items.map((item) => `<li>${renderItem(item)}</li>`).join('')}</ul>`;
}

export function buildResumeHtml(profile) {
  const name = escapeHtml(profile.name || profile.nome || 'Currículo profissional');
  const phone = escapeHtml(profile.phone || profile.telefone);
  const email = escapeHtml(profile.email);
  const location = escapeHtml(profile.address || profile.cidade || profile.cep);
  const age = profile.age ? `${escapeHtml(profile.age)} anos` : '';
  const summary = escapeHtml(profile.descricao || profile.resumo || profile.sobreMim);
  const objective = escapeHtml(profile.trabalho || profile.objetivo);
  const formations = renderList(profile.formations, (item) =>
    `<strong>${escapeHtml(item.course)}</strong>${item.institution ? ` · ${escapeHtml(item.institution)}` : ''}${item.year ? ` · ${escapeHtml(item.year)}` : ''}`,
  );
  const experiences = renderList(profile.experiences, (item) =>
    `<strong>${escapeHtml(item.role)}</strong>${item.company ? ` · ${escapeHtml(item.company)}` : ''}${item.duration ? `<br><span>${escapeHtml(item.duration)}</span>` : ''}`,
  );
  const activities = renderList(profile.atividades, escapeHtml);
  const contact = [phone, email, location, age].filter(Boolean).join(' &nbsp; | &nbsp; ');
  const sections = [
    summary && `<section><h2>Perfil</h2><p>${summary}</p></section>`,
    objective && `<section><h2>Área de interesse</h2><p>${objective}</p></section>`,
    formations && `<section><h2>Formação</h2>${formations}</section>`,
    experiences && `<section><h2>Experiência</h2>${experiences}</section>`,
    activities && `<section><h2>Atividades</h2>${activities}</section>`,
    profile.certificacao && `<section><h2>Cursos e certificados</h2><p>${escapeHtml(profile.certificacao)}</p></section>`,
  ].filter(Boolean).join('');

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    @page { size: A4; margin: 18mm; }
    * { box-sizing: border-box; }
    body { color: #263238; font-family: Arial, Helvetica, sans-serif; font-size: 11pt; line-height: 1.5; }
    header { border-bottom: 3px solid #167D98; margin-bottom: 22px; padding-bottom: 14px; }
    h1 { color: #173B50; font-size: 25pt; line-height: 1.15; margin: 0 0 7px; }
    .contact { color: #53636B; font-size: 9.5pt; }
    section { margin: 0 0 18px; page-break-inside: avoid; }
    h2 { border-bottom: 1px solid #D7E2E6; color: #167D98; font-size: 12pt; letter-spacing: 1px; margin: 0 0 7px; padding-bottom: 4px; text-transform: uppercase; }
    p { margin: 0; white-space: pre-wrap; }
    ul { margin: 0; padding-left: 18px; }
    li { margin: 0 0 6px; }
    li span { color: #66757C; font-size: 9.5pt; }
    .empty { color: #66757C; font-size: 10pt; }
  </style>
</head>
<body>
  <header><h1>${name}</h1><div class="contact">${contact}</div></header>
  ${sections || '<p class="empty">Currículo sem informações adicionais.</p>'}
</body>
</html>`;
}
