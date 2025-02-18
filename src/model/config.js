import mysql from "mysql2";

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'manaye@mysql', 
    database: 'users',
    port: 9000
  });
  

export default db