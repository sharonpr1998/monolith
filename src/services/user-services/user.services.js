import * as userRepositories from '../../repositories/user-repositories/user.repositories'

export const createUserServices = (data) => {
  try {  
  const userData = data;
  // Logic



    const userInfo = userRepositories.createUserRepositories(data);

  // Repo


  // User

  // userId
  // action - opertion - Create , Update, Delete
  // actionId - userInfo._id
  // actionRef - User
  // Description - 

  return userInfo;

  } catch (error) {
    throw new Error("Create Error")
  }
}