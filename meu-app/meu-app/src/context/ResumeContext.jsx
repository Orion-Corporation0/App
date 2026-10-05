import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '@/services/api';
import { useAuth } from './AuthContext';

const ResumeContext = createContext(null);
const emptyDraft = {
  age: '',
  gender: '',
  education: '',
  cep: '',
  descricao: '',
  experiencias: '',
  quantidadeEmpresas: '',
  nomeEmpresa: '',
  tempoTrabalhado: '',
  nuncaTrabalhei: false,
  trabalho: '',
  atividades: [],
  tempoExperiencia: '',
  certificacao: '',
};

function profileToDraft(profile) {
  return {
    ...emptyDraft,
    ...profile,
    gender: profile.gender || profile.genero || '',
    atividades: Array.isArray(profile.atividades) ? profile.atividades : [],
    nuncaTrabalhei: Boolean(profile.nuncaTrabalhei),
  };
}

export function ResumeProvider({ children }) {
  const { candidate } = useAuth();
  const [draft, setDraft] = useState(emptyDraft);
  const [saving, setSaving] = useState(false);
  const [loadedCandidateId, setLoadedCandidateId] = useState(null);
  const [loadFailure, setLoadFailure] = useState(null);
  const loading = Boolean(candidate?.idCandidato && loadedCandidateId !== candidate.idCandidato);
  const loadError = loadFailure && loadFailure.candidateId === candidate?.idCandidato
    ? loadFailure.message
    : null;

  useEffect(() => {
    if (!candidate?.idCandidato) return undefined;

    let active = true;
    api.profile(candidate.idCandidato)
      .then((profile) => {
        if (active) {
          setDraft(profileToDraft(profile));
          setLoadFailure(null);
          setLoadedCandidateId(candidate.idCandidato);
        }
      })
      .catch((error) => {
        if (active) {
          setLoadFailure({ candidateId: candidate.idCandidato, message: error.message });
          setLoadedCandidateId(candidate.idCandidato);
        }
      });

    return () => { active = false; };
  }, [candidate?.idCandidato]);

  const updateDraft = (values) => setDraft((current) => ({ ...current, ...values }));

  const save = async (updates = {}) => {
    if (!candidate?.idCandidato) throw new Error('Faça login para salvar seu currículo.');
    const payload = { ...draft, ...updates };
    setSaving(true);
    try {
      const result = await api.saveResume(candidate.idCandidato, payload);
      setDraft(payload);
      return result;
    } finally {
      setSaving(false);
    }
  };

  return <ResumeContext.Provider value={{ draft, updateDraft, save, saving, loading, loadError }}>{children}</ResumeContext.Provider>;
}

export function useResume() {
  const value = useContext(ResumeContext);
  if (!value) throw new Error('useResume deve ser usado dentro de ResumeProvider.');
  return value;
}
