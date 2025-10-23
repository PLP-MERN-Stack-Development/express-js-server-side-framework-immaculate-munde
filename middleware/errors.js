class NotFoundError extends Error {
  constructor(message = "Resource not found") {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

class ValidationError extends Error {
  constructor(message = "Invalid data") {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

class AuthenticationError extends Error {
  constructor(message = "Unauthorized access") {
    super(message);
    this.name = "AuthenticationError";
    this.statusCode = 401;
  }
}

module.exports = { NotFoundError, ValidationError, AuthenticationError };
