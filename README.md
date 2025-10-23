# Express.js RESTful API – Week 2 Assignment

## 🚀 Overview
This project is a RESTful API built with **Express.js**, implementing CRUD operations for a **products** resource.  
It includes middleware for logging, authentication, validation, and global error handling.

---

## 🧠 Features
- CRUD operations for products (GET, POST, PUT, DELETE)
- Filtering by category
- Pagination and search functionality
- Custom logger and authentication middleware
- Comprehensive error handling

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/PLP-MERN-Stack-Development/express-js-server-side-framework-immaculate-munde.git
cd express-js-server-side-framework-immaculate-munde

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
Create a .env file in your root folder:
PORT=3000
API_KEY=12345secretapikey
NODE_ENV=development

4️⃣ Start the server
npm start
The server will run on:
👉 http://localhost:3000

🧩 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get a specific product
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing product
DELETE	/api/products/:id	Delete a product
GET	/api/products?category=Electronics	Filter by category
GET	/api/products?search=Laptop	Search by name
GET	/api/products?page=2&limit=5	Pagination

🔐 Authentication
All /api/products routes are protected using an API key.

Include the following header in your requests:
x-api-key: your_api_key_here

🧪 Example Requests (using curl)
Get All Products
curl -H "x-api-key: 12345secretapikey" http://localhost:3000/api/products

Add a New Product
curl -X POST http://localhost:3000/api/products \
-H "Content-Type: application/json" \
-H "x-api-key: 12345secretapikey" \
-d '{
  "name": "Phone",
  "description": "Smartphone with 5G",
  "price": 899,
  "category": "Electronics",
  "inStock": true
}'

🧾 Error Handling
Errors are handled globally with meaningful messages and appropriate HTTP status codes.

Example response:
{
  "message": "Product not found",
  "stack": "🥞"
}