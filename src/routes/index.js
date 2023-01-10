const express = require('express');
const router = express.Router();
const productRouter = require('../routes/products')

router.use('/products', productRouter);

module.exports = router;
