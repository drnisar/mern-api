import { Router } from "express";
import auth from "./auth";

const rootRouter: Router = Router();

const authRouter = rootRouter.use("/auth", auth);

export default rootRouter;
