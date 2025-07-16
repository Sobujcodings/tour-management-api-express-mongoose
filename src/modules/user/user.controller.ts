// controller e shudhu amra req, res pass korbo, main business logic(user toyri kora, kibhabe korbo..) likhbo service e.
// ekhane post,delete, udpate shob kore akta obj e kore export kore dibo then use korbo service e.
// ekhane theke request ta k padhiye sheta logic use kore modify kore abar ekhane niye ashbo.
// jokhon create url e hit hobe tokhon ata call kore dibo service theke withe req data.

import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const createdUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.createUser(req.body);

    // ai part tuku service e korbo.
    // const { name, email } = req.body;
    // const user = await User.create({ name, email });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User Created Successfully",
      data: users,
    });
  } catch (error) {
    next(error);
    // then this error will show from the global error handler using next()
  }
};


// get all users (using the promise resolve it does not need try catch anymore)
const getUser = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getUser();
    console.log("result", result);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.ACCEPTED,
      message: "User retrieved Successfully",
      data: result.data,
      meta: result.meta,
    });
    // ai jinish takeo dynamic resuable kore felbo utils funcion likhe bar bar na kore.
    // res.status(200).json({
    //   message: "User created Successfully",
    //   data: user,
    // });
  }
);

// const getUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const users = await UserServices.getUser();
//     res.status(200).json({
//       message: "User created Successfully",
//       data: users,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(httpStatus.BAD_REQUEST).json({
//       message: "Users get successfully",
//       error: error,
//     });
//   }
// };

export const UserControllers = {
  createdUser,
  getUser,
};
