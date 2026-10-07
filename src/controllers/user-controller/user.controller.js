import { MESSAGE } from "../../constants/response-message.contants.js";
import * as userServices from "../../services/user-services/user.services.js"

export const CreateUserContorller = async (req, res) => {
  try {
    const userData = req.body;

    // Validation



    const userInfo = userServices.createUserServices(userData);

    res.status(200).json({
      status: true,
      message: MESSAGE.CREATE_USER,
      data: userInfo,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: MESSAGE.INTERNAL_SERVER_ERROR,
      response: error.message,
    });
  }
};
