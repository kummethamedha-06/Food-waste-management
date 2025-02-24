const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'food_waste_management',
    multipleStatements: true,
    connectionLimit:10, // ✅ Fix for multiple queries
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as ID ' + db.threadId);
});

module.exports = db;
