import { Router } from "express";
import * as userController from "../../controllers/user-controller/user.controller.js";

const userRouter = Router();

userRouter.post('/create', userController.CreateUserContorller);

export default userRouter;