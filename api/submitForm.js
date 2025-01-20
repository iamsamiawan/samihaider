const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',       // Host from FreesqlDatabase
  user: 'sql12758741',   // Username from FreesqlDatabase
  password: 'E1CsdqvNKB', // Password from FreesqlDatabase
  database: 'sql12758741'     // Database name from FreesqlDatabase
});

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Query the database (e.g., insert data)
    connection.query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email],
      (error, results) => {
        if (error) {
          res.status(500).json({ message: 'Error inserting data into database' });
        } else {
          res.status(200).json({ message: 'Data inserted successfully' });
        }
      }
    );
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

