import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import errorHandler from "./middlewares/errorHandler.js";
import AppError from './utils/AppError.js'

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static(path.join(import.meta.dirname, "..", "public")));

app.use((req, res, next) => {
  const err = new AppError("Not Found", 404);
  next(err);
});

app.use(errorHandler);

export default app;
