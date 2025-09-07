import express from 'express';
import { getStudentResult } from '../controllers/studentController.js';
import { asyncHandler } from '../utils/asyncHandler';

const router = express.Router();

router.get('/:id', as(getStudentResult));

export { router as StudentRoutes };