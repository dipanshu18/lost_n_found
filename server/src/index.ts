import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { verifyToken } from "./middlewares/auth.middleware";

import userRouter from "./routes/user.route";
import itemRouter from "./routes/item.route";
import authRouter from "./routes/auth.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);

app.use("/api", itemRouter);

app.use(verifyToken);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
