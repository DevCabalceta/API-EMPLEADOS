import express, { Request, Response} from 'express';
import { getById } from '../controllers/empleado';

const router = express.Router();

router.get('/:id', getById);

export default router;