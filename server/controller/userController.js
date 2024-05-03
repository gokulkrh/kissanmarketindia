import userValidator from "../validator/users.js";

import userService from "../service/users/users.js";
import isEmail from "validator/lib/isEmail.js";

export default {
  getUserHandler: async (req, res, next) => {
    try {
      const user = await userService.getUser(req.body.email);
      res.status(200).json({
        data: user[0],
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  userLoginHandler: async () => {},

  registerUserHandler: async (req, res, next) => {
    let reqBody;

    try {
      reqBody = userValidator.validateRegisterRequest(req);
      try {
        const user = await userService.registerUser(reqBody);
        res.status(200).json({
          message: "user registered successfully",
          data: {
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            profile_pic_url: user.profile_pic_url,
            joined_date: user.created_at,
          },
        });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },

  updateUserHandler: async () => {},
};
