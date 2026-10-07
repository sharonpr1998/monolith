import { MESSAGE } from "../../constants/response-message.contants.js";

export const CreateUserContorller = async (req, res) => {
  try {
    const userData = req.body;

    res.status(200).json({
      status: true,
      message: MESSAGE.CREATE_USER,
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: MESSAGE.INTERNAL_SERVER_ERROR,
      response: error.message,
    });
  }
};
