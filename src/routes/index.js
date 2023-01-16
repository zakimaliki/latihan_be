const express = require('express');
const router = express.Router();
const productRouter = require('../routes/products')
const userRouter = require('../routes/users')


router.use('/products', productRouter);
router.use('/users', userRouter);


module.exports = router;
