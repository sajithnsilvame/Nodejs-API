import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import indexRoute from "./routes/routers.mjs";
import swaggerOptions from "./swagger/swaggerOptions.mjs";
import connectDB from "./database/database.mjs";

const port = process.env.PORT || 8000;
const app = express();
app.use(helmet());
app.use(express.json());
const corsOptions = {
  origin: true, // Allow requests from any origin || "https://example.com"
  optionsSuccessStatus: 200, 
};
app.use(cors());
app.use(morgan("dev")); // "dev" is a predefined format for logging

config();
connectDB();

// swagger doc UI generation
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/api", indexRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
