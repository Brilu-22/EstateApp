import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

// Use an environment variable or default to port 8800
const PORT = process.env.PORT || 8801;

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`server is running!`);
});
