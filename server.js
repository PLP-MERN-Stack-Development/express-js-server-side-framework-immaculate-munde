const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(express.json());
app.use(logger);

// ✅ Routes
app.use("/api/products", productRoutes);
// ✅ Authentication Middleware for protected routes
app.use('/api/products', auth);


// ✅ Global Error Handler
app.use(errorHandler);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Hello World! Welcome to the Express.js API 🚀");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
