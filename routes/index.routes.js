import express from 'express';
import { renderHome, renderAbout, renderForm, submitForm } from '../controllers/index.controller.js';

const router = express.Router();

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/form', renderForm);
router.post('/form', submitForm);

export default router;
