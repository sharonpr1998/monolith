// Model Define
import { userDataModel } from "../../models/user.model";


export const createUserRepositories = async(
  data
) => {
  try {
    const userData = data;

    const userInfo = userDataModel.create(userData);

    return userInfo;

  } catch (error) {
    throw new Error("User Creation Error")
  }
}