import { Router } from "express";
import { MESSAGE } from "../constants/response-message.contants.js";

import userRouter from "./user-routes/user.router.js";

const indexRouter = Router();


// Basic Setup in Api

indexRouter.get("/test", (req, res) => {
  try {
    const testMessage = "Testing is Success";

    res.status(200).json({
      status: true,
      messsage: MESSAGE.TEST_MESSAGE_SUCCESS,
      response: testMessage,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: MESSAGE.INTERNAL_SERVER_ERROR,
      response: error.message,
    });
  }
});


// User Management

indexRouter.use('/user', userRouter)




export default indexRouter;