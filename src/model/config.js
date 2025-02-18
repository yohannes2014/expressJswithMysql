import mysql from "mysql2";

const mySqlDb = mysql.createConnection({
   host:'127.0.0.1:9000',
   user:'root',
   password:'',
   database:'users'

});

export default mySqlDb