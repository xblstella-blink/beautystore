import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

// JSON BODY
express.json();
app.use(express);

//cookie-parser
app.use(cookieParser());

//CORS
app.use(cors());

//Error middleware
app.use(notFound);
app.use(errorHandler);

export default app;
