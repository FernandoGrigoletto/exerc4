import express from 'express';
import * as disciplinaController from '../controllers/disciplinaController.js'; 

const router = express.Router();

// Lembre-se: no Controller, a função deve se chamar 'listar' ou 'index'
// O nome 'listen' geralmente é usado apenas para o servidor (app.listen)
router.get('/', disciplinaController.listar); 

export default router;
