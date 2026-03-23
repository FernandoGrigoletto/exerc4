import express from 'express';
// ⚠️ IMPORTANTE: Sempre coloque a extensão .js no final do caminho dos seus arquivos
import * as disciplinaController from '../controllers/disciplinaController.js';

const router = express.Router();

// Aqui chamamos a função 'listen' que está dentro do seu Controller
router.get('/', disciplinaController.listen);

export default router;
