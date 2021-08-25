const mysql = require('mysql2/promise');

async function start() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dingjia3113',
    port: '3306',
    database: 'week7_mysql_db'
  });

  const [rows] = await connection.execute('select now();');

  return rows;
}

module.exports = start;
