import { apiResponse } from '../utils/apiResponse.js';
import { apiError } from '../utils/apiError.js';
import { createStudent } from '../models/studentModel.js';

export const addStudent = (req, res, next) => {
    const student = req.body;

    createStudent(student, (err, result) => {
        if (err) return next(new apiError(500, 'Failed to create student', [err]));
        return res.status(201).json(new apiResponse(201, { studentId: result.insertId }, 'Student added successfully'));
    });
};
