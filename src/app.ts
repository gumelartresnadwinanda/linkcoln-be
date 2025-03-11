const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
import routes from "./routes/index";

require("dotenv").config();
const cookieParser = require("cookie-parser");
const allowedOrigins = process.env.CORS_ORIGINS?.split(",") || [];

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: (
      origin: string,
      callback: (arg0: Error | null, arg1: boolean | undefined) => void
    ) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
