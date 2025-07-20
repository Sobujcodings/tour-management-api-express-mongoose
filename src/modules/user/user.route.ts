/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Router } from "express";
import { UserControllers } from "./user.controller";
import { createUserZodSchema } from "./user.validation";
import { validationRequest } from "../../middlewares/validateRequest";
const router = Router();


// ekhane zod use kore register/user create a time e data k validate korbo akta middleware use kore then shetake controller e padhabo -> majhkhane akta middleware add kore validate kore nilam(majh rastay atkiye atai middleware r kaj)
router.post("/register", validationRequest(createUserZodSchema), UserControllers.createdUser);
router.get("/all-users", UserControllers.getUser);

export const userRoutes = router;



// raw process validation in one file
// // ekhane zod use kore register/user create a time e data k validate korbo akta middleware use kore then shetake controller e padhabo
// router.post(
//   "/register",
//   async (req: Request, res: Response, next: NextFunction) => {
//     const createUserZodSchema = z.object({
//       name: z
//         .string({ invalid_type_error: "Name must be string" })
//         .min(2, { message: "Name too short minimum 2 character long" })
//         .max(50, { message: "Name too long" }),
//       email: z.string().email(),
//       password: z
//         .string()
//         .min(8)
//         .regex(/[A-Z]/, {
//           message: "Password must include one uppercase letter",
//         })
//         .regex(/\d/, { message: "Password must include at least one number" })
//         .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, {
//           message: "Password must include at least one special character",
//         }),
//       phone: z
//         .string({ invalid_type_error: "Phone Number must be string" })
//         .regex(/^01[3-9][0-9]{8}$/, {
//           message:
//             "Phone number must be a valid Bangladeshi number starting with 01 and 11 digits total",
//         })
//         .optional(),
//       adress: z
//         .string({ invalid_type_error: "Address must be string" })
//         .max(200, { message: "Address cannot exceed 200 characters" })
//         .optional(),
//     });
//     // req.body ta k ekhan theke niye zodSchema r moddhe pass kore validate kore nibo then abar req.body te set kore dibo jate ja valu tai thake then req.body ta k diye user create korbo as it is
//     (req as any).body = await createUserZodSchema.parseAsync(req.body);
//     console.log(req.body);

//     // go to next to further process here move to user controller and createUser
//     next();
//   },
//   UserControllers.createdUser
// );
