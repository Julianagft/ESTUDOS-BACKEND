import { IUser } from "../interface/User";
import { User } from "../model/UserSchema";

export const findAll = async () => {
    return User.find();
}