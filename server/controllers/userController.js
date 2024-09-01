// import userValidator from "../validators/users.js";

import userService from "../service/users/users.js";
import { createToken } from "../middlewares/jwt_auth.js";

export default {
  getUserHandler: async (req, res) => {
    try {
      const user = await userService.getUser(req.body.email);
      res.status(200).json({
        data: user[0],
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  userLoginHandler: async (req, res) => {
    try {
      let reqBody;
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },

  registerUserHandler: async (req, res) => {
    try {
      const user = await userService.registerUser(req.body);
      res.status(200).json({
        message: "user registered successfully",
        data: {
          fullname: user.fullname,
          email: user.email,
          phone: user.phone,
          profile_pic_url: user.profile_pic_url,
          joined_date: user.created_at,
          customer_token: createToken(user.user_id),
        },
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUserHandler: async (req, res) => {
    try {
      const user = await userService.updateUser(req.body);
      res.status(200).json({ message: "user updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
