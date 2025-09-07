import db from '../db/db.js';

// Create a new course
export const createCourse = (course, callback) => {
    const { course_name, credits } = course;
    const query = 'INSERT INTO courses (course_name, credits) VALUES (?, ?)';
    db.query(query, [course_name, credits], callback);
};

// Get all courses (optional)
export const getAllCourses = (callback) => {
    const query = 'SELECT * FROM courses';
    db.query(query, callback);
};
