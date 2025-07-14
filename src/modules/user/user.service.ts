import { Iuser } from "./user.interface";
import { User } from "./user.model";

// this user has partial attr of model user
// it might have multiple service, so wrap it in a obj

export const createUser = async (payload: Partial<Iuser>) => {
//   console.log("reqbody", payload);
  const { name, email } = payload;
  const user = await User.create({ name, email });
  return user;
};

export const UserServices = {
  createUser,
};
