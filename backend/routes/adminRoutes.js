import express from 'express';
import { addStudent } from '../controllers/adminController.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validateStudentInput } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/students',validateStudentInput, asyncHandler(addStudent));

export { router as adminRoutes };