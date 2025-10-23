// middleware/validateProduct.js
const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || !category || price == null || inStock == null) {
    return res.status(400).json({ message: 'All product fields are required' });
  }

  if (typeof price !== 'number') {
    return res.status(400).json({ message: 'Price must be a number' });
  }

  if (typeof inStock !== 'boolean') {
    return res.status(400).json({ message: 'inStock must be true or false' });
  }

  next();
};

module.exports = validateProduct;
