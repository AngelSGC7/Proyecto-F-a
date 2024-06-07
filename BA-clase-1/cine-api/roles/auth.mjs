import express from 'express';
import { loginUser } from '../controllers/authControllers.mjs';

const router = express.Router();

router.post('/login', loginUser);

export default router;