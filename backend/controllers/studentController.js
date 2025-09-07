import { apiResponse } from '../utils/apiResponse.js';
import { apiError } from '../utils/apiError.js';
import { getResultsByStudentId } from '../models/marksModel.js';

export const getStudentResult = (req, res, next) => {
    const studentId = req.params.id;

    getResultsByStudentId(studentId, (err, results) => {
        if (err) return next(new apiError(500, 'Failed to fetch results', [err]));
        return res.status(200).json(new apiResponse(200, results, 'Student results fetched successfully'));
    });
};
