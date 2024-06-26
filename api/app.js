import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 8801;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
