import User from "../models/user.js";

async function GetUser(username) {
  try {
    return await User.findOne({
      where: {
        username: username
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export {
  GetUser,
};
