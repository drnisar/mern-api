import { Router } from "express";
import { login } from "../controllers/authController";
import { register } from "../controllers/authController";
import { validateRegister } from "../validation/userValidation";

const authRoutes: Router = Router();

const auth = authRoutes.get("/login", login);

const registerRoute = authRoutes.post(
  "/register",
  validateRegister(),
  register,
);

export default authRoutes;
