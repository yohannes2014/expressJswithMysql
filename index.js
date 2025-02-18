import express  from 'express';
import db from './src/model/config.js';

const app = express();
const port = 5000;

// MySQL connection setup (without SSL)

// Test the MySQL connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.code);
  } else {
    console.log('Connected to MySQL on port 9000');
  }
  if (connection) connection.release(); // Always release the connection
});

// Example route to test DB query
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM myuser', (err, rows) => {
    if (err) {
      return res.status(500).send('Error fetching users');
    }
    res.json(rows);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
