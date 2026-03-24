import express from "express";
import cors from "cors";

const app = express();

// JSON BODY
express.json();
app.use(express);

//CORS
app.use(cors());

export default app;
