const express = require('express');
const cors = require('cors');
const { connectDB, disconnectDB } = require('./controllers/db');
const products = require('./controllers/products');
const courierCharge = require('./controllers/courierCharge');
const orderPackage = require('./controllers/orderPackage');

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/products', products.getAllProducts);
app.get('/courierCharge', courierCharge.getAllCourierCharge);
app.post('/orderPackage', orderPackage.orderPackage);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on('SIGINT', () => {
  disconnectDB();
  process.exit();
});
