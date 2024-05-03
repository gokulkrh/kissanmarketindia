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

  getUser: async (email) => {
    try {
      const user = await db.select("*").from("users").where({ email: email });
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  updateUser: async (user) => {
    try {
      await db("users").update(user).where({ id: user.id });
    } catch (error) {
      throw error;
    }
  },

  getLoginCredentials: async () => {},
};
