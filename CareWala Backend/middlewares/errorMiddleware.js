class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Agar MongoDB me duplicate email jaisi error aaye
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    err = new ErrorHandler(message, 400);
  }

  // Agar JWT token invalid ho
  if (err.name === "JsonWebTokenError") {
    const message = `Invalid token, please login again`;
    err = new ErrorHandler(message, 400);
  }

  // Agar JWT token expire ho gaya ho
  if (err.name === "TokenExpiredError") {
    const message = `Token expired, please login again`;
    err = new ErrorHandler(message, 400);
  }

  // Agar MongoDB ObjectId galat format me ho
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;