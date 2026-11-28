const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : "Something went wrong";
  const status = err.status || "error";

  res.status(statusCode).json({
    success: false,
    status,
    statusCode,
    message,
    data: null,
    errors: err.errors || [],
    ...(process.env.ENV === "development" && { stack: err.stack }),
  });
};

export default errorHandler;
