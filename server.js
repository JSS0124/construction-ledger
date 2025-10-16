const express = require('express');
const db = require('./api');
const app = express();

app.use(express.json());

// Products
app.get('/api/products', async (req, res) => {
  const result = await db.query('SELECT * FROM products');
  res.json(result.rows);
});

app.post('/api/products', async (req, res) => {
  const { name, categoryId, price, price1, price2, price3 } = req.body;
  await db.query('INSERT INTO products (name, categoryId, price, price1, price2, price3) VALUES ($1, $2, $3, $4, $5, $6)', 
    [name, categoryId, price, price1, price2, price3]);
  res.status(201).send();
});

app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, categoryId, price, price1, price2, price3 } = req.body;
  await db.query('UPDATE products SET name=$1, categoryId=$2, price=$3, price1=$4, price2=$5, price3=$6 WHERE id=$7', 
    [name, categoryId, price, price1, price2, price3, id]);
  res.status(200).send();
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM products WHERE id=$1', [id]);
  res.status(200).send();
});

// Categories
app.get('/api/categories', async (req, res) => {
  const result = await db.query('SELECT * FROM categories');
  res.json(result.rows);
});

app.post('/api/categories', async (req, res) => {
  const { name } = req.body;
  await db.query('INSERT INTO categories (name) VALUES ($1)', [name]);
  res.status(201).send();
});

app.put('/api/categories/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.query('UPDATE categories SET name=$1 WHERE id=$2', [name, id]);
  res.status(200).send();
});

app.delete('/api/categories/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM categories WHERE id=$1', [id]);
  res.status(200).send();
});

// Vendors
app.get('/api/vendors', async (req, res) => {
  const result = await db.query('SELECT * FROM vendors');
  res.json(result.rows);
});

app.post('/api/vendors', async (req, res) => {
  const { name, type, contact, address, phone } = req.body;
  await db.query('INSERT INTO vendors (name, type, contact, address, phone) VALUES ($1, $2, $3, $4, $5)', 
    [name, type, contact, address, phone]);
  res.status(201).send();
});

app.put('/api/vendors/:id', async (req, res) => {
  const { id } = req.params;
  const { name, type, contact, address, phone } = req.body;
  await db.query('UPDATE vendors SET name=$1, type=$2, contact=$3, address=$4, phone=$5 WHERE id=$6', 
    [name, type, contact, address, phone, id]);
  res.status(200).send();
});

app.delete('/api/vendors/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM vendors WHERE id=$1', [id]);
  res.status(200).send();
});

// Clients
app.get('/api/clients', async (req, res) => {
  const result = await db.query('SELECT * FROM clients');
  res.json(result.rows);
});

app.post('/api/clients', async (req, res) => {
  const { name, contactPerson, phone, address, type, priceLevel } = req.body;
  await db.query('INSERT INTO clients (name, contactPerson, phone, address, type, priceLevel) VALUES ($1, $2, $3, $4, $5, $6)', 
    [name, contactPerson, phone, address, type, priceLevel]);
  res.status(201).send();
});

app.put('/api/clients/:id', async (req, res) => {
  const { id } = req.params;
  const { name, contactPerson, phone, address, type, priceLevel } = req.body;
  await db.query('UPDATE clients SET name=$1, contactPerson=$2, phone=$3, address=$4, type=$5, priceLevel=$6 WHERE id=$7', 
    [name, contactPerson, phone, address, type, priceLevel, id]);
  res.status(200).send();
});

app.delete('/api/clients/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM clients WHERE id=$1', [id]);
  res.status(200).send();
});

// Deliveries
app.get('/api/deliveries', async (req, res) => {
  const result = await db.query('SELECT * FROM deliveries');
  res.json(result.rows);
});

app.post('/api/deliveries', async (req, res) => {
  const { date, slipNumber, vehicleNumber, clientId, vendorId, productId, foot, az, size, sqft, rate, totalAmount } = req.body;
  await db.query('INSERT INTO deliveries (date, slipNumber, vehicleNumber, clientId, vendorId, productId, foot, az, size, sqft, rate, totalAmount) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', 
    [date, slipNumber, vehicleNumber, clientId, vendorId, productId, foot, az, size, sqft, rate, totalAmount]);
  res.status(201).send();
});

app.put('/api/deliveries/:id', async (req, res) => {
  const { id } = req.params;
  const { date, slipNumber, vehicleNumber, clientId, vendorId, productId, foot, az, size, sqft, rate, totalAmount } = req.body;
  await db.query('UPDATE deliveries SET date=$1, slipNumber=$2, vehicleNumber=$3, clientId=$4, vendorId=$5, productId=$6, foot=$7, az=$8, size=$9, sqft=$10, rate=$11, totalAmount=$12 WHERE id=$13', 
    [date, slipNumber, vehicleNumber, clientId, vendorId, productId, foot, az, size, sqft, rate, totalAmount, id]);
  res.status(200).send();
});

app.delete('/api/deliveries/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM deliveries WHERE id=$1', [id]);
  res.status(200).send();
});

// Purchases
app.get('/api/purchases', async (req, res) => {
  const result = await db.query('SELECT * FROM purchases');
  res.json(result.rows);
});

app.post('/api/purchases', async (req, res) => {
  const { date, slipNumber, vendorId, productId, foot, az, size, sqft, rate, totalAmount } = req.body;
  await db.query('INSERT INTO purchases (date, slipNumber, vendorId, productId, foot, az, size, sqft, rate, totalAmount) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
    [date, slipNumber, vendorId, productId, foot, az, size, sqft, rate, totalAmount]);
  res.status(201).send();
});

app.put('/api/purchases/:id', async (req, res) => {
  const { id } = req.params;
  const { date, slipNumber, vendorId, productId, foot, az, size, sqft, rate, totalAmount } = req.body;
  await db.query('UPDATE purchases SET date=$1, slipNumber=$2, vendorId=$3, productId=$4, foot=$5, az=$6, size=$7, sqft=$8, rate=$9, totalAmount=$10 WHERE id=$11', 
    [date, slipNumber, vendorId, productId, foot, az, size, sqft, rate, totalAmount, id]);
  res.status(200).send();
});

app.delete('/api/purchases/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM purchases WHERE id=$1', [id]);
  res.status(200).send();
});

// Payments
app.get('/api/payments', async (req, res) => {
  const result = await db.query('SELECT * FROM payments');
  res.json(result.rows);
});

app.post('/api/payments', async (req, res) => {
  const { date, type, clientId, vendorId, amount } = req.body;
  await db.query('INSERT INTO payments (date, type, clientId, vendorId, amount) VALUES ($1, $2, $3, $4, $5)', 
    [date, type, clientId, vendorId, amount]);
  res.status(201).send();
});

app.put('/api/payments/:id', async (req, res) => {
  const { id } = req.params;
  const { date, type, clientId, vendorId, amount } = req.body;
  await db.query('UPDATE payments SET date=$1, type=$2, clientId=$3, vendorId=$4, amount=$5 WHERE id=$6', 
    [date, type, clientId, vendorId, amount, id]);
  res.status(200).send();
});

app.delete('/api/payments/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM payments WHERE id=$1', [id]);
  res.status(200).send();
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));