// middleware/auth.js
const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validKey = process.env.API_KEY || '12345'; // default key for testing

  if (!apiKey || apiKey !== validKey) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }

  next();
};

module.exports = auth;
