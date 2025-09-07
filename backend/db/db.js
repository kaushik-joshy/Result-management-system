import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_result_db'
});

db.connect((err) => {
    if(err){
        console.error('MySql connection failed:', err);
        return;
    }
    console.log('Connected to MySql');
});

export default  db;