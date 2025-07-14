import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

router.post("/register", UserControllers.createdUser);

// to use this route named this as userRoutes & export;
export const userRoutes = router;
