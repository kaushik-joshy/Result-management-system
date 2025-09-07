import db from '../db/db.js';

// Create a new student
export const createStudent = (student, callback) => {
    const { name, dob, email, className, password } = student;
    const query = `
        INSERT INTO students (name, dob, email, class, password)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [name, dob, email, className, password], callback);
};

// Get a student by ID (optional)
export const getStudentById = (studentId, callback) => {
    const query = 'SELECT * FROM students WHERE student_id = ?';
    db.query(query, [studentId], callback);
};
