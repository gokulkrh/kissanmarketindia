import usersStore from "../../data_store/store/users.js";
import User from "../../data_store/models/entities/users.js";
import { generatePIDwithPrefix } from "../../utils/utils.js";

export default {
  loginUser: async (reqBody) => {
    try {
      const user = await usersStore.getUser(request.username);
      if (user.password !== request.password) {
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  registerUser: async (reqBody) => {
    let user = new User(reqBody);

    try {
      await usersStore.createUser(user);
      return user;
    } catch (error) {
      console.error("RegisterUser: ", error.message);
      throw error;
    }
  },

  updateUser: async (reqBody) => {
    let user = usersStore.getUser();
    setUserValues(user);
  },

  getUser: async (email) => {
    try {
      const user = usersStore.getUser(email);
      return user;
    } catch (error) {
      throw error;
    }
  },
};
