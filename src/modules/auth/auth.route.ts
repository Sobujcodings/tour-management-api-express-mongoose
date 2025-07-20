import { NextFunction, Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/login", (req, res, next : NextFunction) => {
//   console.log("login route hit");
  AuthController.credentailsLogin(req, res, next);
});

export const AuthRouter = router;
