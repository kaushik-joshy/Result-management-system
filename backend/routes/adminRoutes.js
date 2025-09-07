import express from 'express';
import { addStudent } from '../controllers/adminController.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = express.Router();

router.post('/students', asyncHandler(addStudent));

export { router as adminRoutes };