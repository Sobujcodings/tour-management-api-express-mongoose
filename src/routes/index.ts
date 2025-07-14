// shob gula route ekhane use kore rakhchi jetay hit hobe ekhan theke sekheane re-direct hobe

import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  // {
  //     path: '/tour',
  //     route: tourRoutes,
  // },
];

// path ata hole ai route/file e jao
moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// ek e kotha
// router.use("/user", userRoutes)
