// controller e shudhu amra req, res pass korbo, main business logic(user toyri kora, kibhabe korbo..) likhbo service e.
// ekhane post,delete, udpate shob kore akta obj e kore export kore dibo then use korbo service e.
// ekhane theke request ta k padhiye sheta logic use kore modify kore abar ekhane niye ashbo.

import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import httpStatus from "http-status-codes";

// jokhon create url e hit hobe tokhon ata call kore dibo service theke withe req data.
const createdUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserServices.createUser(req.body);
    
    // ai part tuku service e korbo.
    // const { name, email } = req.body;
    // const user = await User.create({ name, email });

    res.status(200).json({
      message: "User created Successfully",
      data: user,
    });
  } catch (error) {
    next(error);
    // then this error will show from the global error handler using next()
    // res.status(httpStatus.BAD_REQUEST).json({
    //   message: "User is not created successfully",
    //   error: error,
    // });
  }
};

export const UserControllers = {
  createdUser,
};
