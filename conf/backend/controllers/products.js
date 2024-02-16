const { connection } = require('./db');

exports.getAllProducts = (req, res) => {
  connection.query('SELECT * FROM products', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
};
