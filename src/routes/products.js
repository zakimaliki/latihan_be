const express = require('express');
const router = express.Router();
const productController = require('../controller/products');
// const {validate} = require('../middleware/common')
const {protect} = require('../middleware/auth')
const upload = require('../middleware/upload')


router.get('/',protect , productController.getAllProduct);
router.get('/:id', productController.getDetailProduct);
router.post('/', upload.single('photo') , productController.createProduct);
router.put('/:id', upload.single('photo') , productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;