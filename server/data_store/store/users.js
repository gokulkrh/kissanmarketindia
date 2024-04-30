import db from "../knex.js";

export default {
  createUser: async (user) => {
    try {
      await db.insert(user).into("users");
    } catch (error) {
      console.log("AddUser: ", error.message);
      throw error;
    }
  },

  getUser: async () => {
    try {
      const user = await db.select("*").from("users");
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  updateUser: async () => {},
  getLoginCredentials: async () => {},
};
