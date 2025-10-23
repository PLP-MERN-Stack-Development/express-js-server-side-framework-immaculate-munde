const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const validateProduct = require('../middleware/validateProduct');


// Sample in-memory data
let products = [
  { id: uuidv4(), name: "Laptop", description: "High performance laptop", price: 1200, category: "Electronics", inStock: true },
  { id: uuidv4(), name: "Shoes", description: "Running shoes", price: 80, category: "Fashion", inStock: false },
];

// ✅ GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// ✅ GET one product by ID
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// ✅ POST create product
router.post("/", (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || !price || !category || inStock === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.post('/', validateProduct, (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put('/:id', validateProduct, (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const { name, description, price, category, inStock } = req.body;
  product.name = name ?? product.name;
  product.description = description ?? product.description;
  product.price = price ?? product.price;
  product.category = category ?? product.category;
  product.inStock = inStock ?? product.inStock;

  res.json(product);
});

// ✅ DELETE product
router.delete("/:id", (req, res) => {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  products.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
