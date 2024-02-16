const { connection } = require('./db');

exports.getAllCourierCharge = (req, res) => {
  connection.query('SELECT * FROM courierCharge', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.getCourierCharge = async () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM courierCharge', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};