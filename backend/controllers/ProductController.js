const productService = require('../services/productService');

// Create a new product
const createProduct = async (req, res) => {
    // const {product} = req.body
        const newProduct = await productService.createProduct(req.body);
        if(!newProduct)
        res.send("Something went wrong");
    
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch products.'});
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({error: 'Product not found.'});
        }
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch the product.'});
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const {id, name, description, price, frontImage, category, details, images} = req.body;
        if (id) {
            const updatedProduct = await productService.updateProduct(id, name, description, price, frontImage, category, details, images);
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({error: 'Product not found.'});
            }
        }
    } catch (error) {
        res.status(500).json({error: 'Failed to update the product.'});
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await productService.deleteProduct(productId);
        if (deletedProduct) {
            res.status(200).json(deletedProduct);
        } else {
            res.status(404).json({error: 'Product not found.'});
        }
    } catch (error) {
        res.status(500).json({error: 'Failed to delete the product.'});
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
