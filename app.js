import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";

const app = express();
app.use(express);

//CORS
app.use(cors());

// JSON BODY
express.json();

//cookie-parser
app.use(cookieParser());

//ROUTES
app.use("/api/v1/auth", authRoute);

//Error middleware
app.use(notFound);
app.use(errorHandler);

export default app;
