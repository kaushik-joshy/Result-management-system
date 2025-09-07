import db from '../db/db.js';

// Add marks for a student
export const addMarks = (marks, callback) => {
    const { student_id, course_id, marks_obtained } = marks;
    const query = `
        INSERT INTO marks (student_id, course_id, marks_obtained)
        VALUES (?, ?, ?)
    `;
    db.query(query, [student_id, course_id, marks_obtained], callback);
};

// Get results by student ID
export const getResultsByStudentId = (studentId, callback) => {
    const query = `
        SELECT s.name, c.course_name, m.marks_obtained
        FROM marks m
        JOIN students s ON m.student_id = s.student_id
        JOIN courses c ON m.course_id = c.course_id
        WHERE s.student_id = ?
    `;
    db.query(query, [studentId], callback);
};
