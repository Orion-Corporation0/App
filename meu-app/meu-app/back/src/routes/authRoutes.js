import { Router } from 'express';
import {
	registrarCandidato,
	loginCandidato,
	listarCandidatos,
	getProfile,
	updateProfile,
	saveResume,
	getHome,
	listarVagas,
	requestPasswordCode,
	verifyPasswordCode,
	resetPassword,
} from '../controllers/candidateController.js';

const router = Router();
router.post('/cadastro', registrarCandidato);
router.post('/login', loginCandidato);
router.get('/', listarCandidatos);
router.get('/vagas', listarVagas);
router.post('/password/request', requestPasswordCode);
router.post('/password/verify', verifyPasswordCode);
router.post('/password/reset', resetPassword);
router.get('/:id/perfil', getProfile);
router.patch('/:id/perfil', updateProfile);
router.get('/:id/home', getHome);
router.post('/:id/curriculo', saveResume);
export default router;