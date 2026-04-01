import type { Request, Response } from "express";
import User from "../schemas/users";
import bcrypt from "bcrypt";

export const login = (req: Request, res: Response) => {
  res.send("Login route");
};

// export const register = async (req: Request, res: Response) => {
//   const { name, email, password } = req.body;
//   res.status(501).json({
//     message: "Register persistence is not configured",
//     user: { name, email, password },
//   });
// };

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // // Validate the input
  // const { error } = validateRegister({ name, email, password });
  // if (error) {
  //   return res.status(400).json({
  //     message: error.details?.[0]?.message ?? "Invalid request data",
  //   });
  // }

  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Encrypt the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({
    message: "User registered successfully",
    user: newUser,
  });
};
