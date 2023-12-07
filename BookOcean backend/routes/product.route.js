const express = require('express');
const productController  = require('../controllers/product.controller');
const auth = require('../middleware/auth');
const verifyToken = require('../middleware/verifyToken');
const productRoute = express.Router();

productRoute.route('/')
    .get(productController.getProducts)
    .post(verifyToken, auth('admin'), productController.createProduct)

productRoute.route('/trending')
    .get(productController.getTrendingProducts)

productRoute.route('/:id')
    .get(productController.getProductById)
    .patch(verifyToken, auth('admin'), productController.updateProduct)
    .delete(verifyToken, auth('admin'), productController.deleteProduct)

module.exports = productRoute;