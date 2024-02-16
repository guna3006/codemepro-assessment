const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '30.0.0.5',
  user: 'codemepro',
  password: 'codemepro',
  database: 'codemepro_db',
});

const connectDB = () => {
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      throw err;
    }
    console.log('Connected to the database');
  });
};

const disconnectDB = () => {
  connection.end((err) => {
    if (err) {
      console.error('Error disconnecting from database:', err);
      throw err;
    }
    console.log('Disconnected from the database');
  });
};

module.exports = {
  connectDB,
  disconnectDB,
  connection,
};
