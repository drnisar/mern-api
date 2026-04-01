import Joi from "joi";
import type { Request, Response, NextFunction } from "express";

const registerValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const validateRegister = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = registerValidation.validate(req.body, {
      abortEarly: false,
    });

    if (!error) return next();

    const errors = error.details.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    return res.status(400).json({
      status: "fail",
      errors,
    });
  };
};
