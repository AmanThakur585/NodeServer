const { createServer } = require('node:http');
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'first'
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
// connection.query('SELECT * FROM your_table', (err, results, fields) => {
//   if (err) {
//     console.error('Error executing query:', err);
//     return;
//   }
//   console.log('Query results:', results);
// });

// Close the connection
// connection.end((err) => {
//   if (err) {
//     console.error('Error closing the connection:', err);
//     return;
//   }
//   console.log('Connection closed.');
// });

const hostname = '127.0.0.1';
const port = 3001;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
