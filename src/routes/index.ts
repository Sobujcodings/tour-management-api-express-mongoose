// shob gula route ekhane use kore rakhchi jetay hit hobe ekhan theke sekheane re-direct hobe
// router.get("/test", (req, res) => res.send("Test route works"));

import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { AuthRouter } from "../modules/auth/auth.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
];

// path ata hole ai route/file e jao
moduleRoutes.forEach((route, path) => {
  console.log(`Registering route for path: /api/v1${path}`);
  router.use(route.path, route.route);
});

// ek e kotha
// router.use("/user", userRoutes)
