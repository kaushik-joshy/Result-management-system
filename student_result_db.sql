-- Creating db
CREATE DATABASE IF NOT EXISTS student_result_db;
USE student_result_db;

-- Students table
CREATE TABLE IF NOT EXISTS students (
	student_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	dob DATE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	class VARCHAR(50),
	password VARCHAR(255) NOT NULL
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses(
	course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    credits INT NOT NULL
);

-- Marks table
CREATE TABLE IF NOT EXISTS marks(
	mark_id INT AUTO_INCREMENT PRIMARY KEY,
	student_id INT,
	course_id INT,
	marks_obtained DECIMAL(5,2),
	FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
	FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE
);

-- Teachers table
CREATE TABLE IF NOT EXISTS teachers(
	teacher_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL
);

-- Sample data
INSERT INTO teachers(name, email, password) VALUES 
('Admin User', 'admin@gmail.com', 'admin123');

INSERT INTO students(name, dob, email, class, password) VALUES
('Kaushik Joshi', '2005-01-01', 'kaushik@gmail.com', 'TE5', 'kaushik123');

INSERT INTO courses(course_name, credits) VALUES
('DBMS', 5), ('DC', 3);

INSERT INTO marks(student_id, course_id, marks_obtained) VALUES 
(1, 1, 85.50),
(1, 2, 90.00);