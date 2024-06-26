const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', // replace with your host
  user: 'root', // replace with your database username
  password: 'password', // replace with your database password
  database: 'first' // replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Execute a query
connection.query('SELECT * FROM your_table', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing the connection:', err);
    return;
  }
  console.log('Connection closed.');
});
