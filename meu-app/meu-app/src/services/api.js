import Constants from 'expo-constants';

const host = Constants.expoConfig?.hostUri?.split(':')[0] || 'localhost';
const API_URL = `http://${host}:3333`;

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.erro || body.message || 'Não foi possível concluir a operação.');
  }
  return body;
}

export const api = {
  health: () => apiRequest('/api/health'),
  register: (payload) => apiRequest('/api/candidatos/cadastro', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload) => apiRequest('/api/candidatos/login', { method: 'POST', body: JSON.stringify(payload) }),
  requestPasswordCode: (telefone) => apiRequest('/api/candidatos/password/request', { method: 'POST', body: JSON.stringify({ telefone }) }),
  verifyPasswordCode: (telefone, codigo) => apiRequest('/api/candidatos/password/verify', { method: 'POST', body: JSON.stringify({ telefone, codigo }) }),
  resetPassword: (telefone, codigo, senha) => apiRequest('/api/candidatos/password/reset', { method: 'POST', body: JSON.stringify({ telefone, codigo, senha }) }),
  profile: (id) => apiRequest(`/api/candidatos/${id}/perfil`),
  updateProfile: (id, payload) => apiRequest(`/api/candidatos/${id}/perfil`, { method: 'PATCH', body: JSON.stringify(payload) }),
  home: (id) => apiRequest(`/api/candidatos/${id}/home`),
  jobs: () => apiRequest('/api/candidatos/vagas'),
  saveResume: (id, payload) => apiRequest(`/api/candidatos/${id}/curriculo`, { method: 'POST', body: JSON.stringify(payload) }),
};

export { API_URL };
