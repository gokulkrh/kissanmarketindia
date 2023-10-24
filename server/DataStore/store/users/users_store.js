import User from "../../models/users/user";

async function CreateNewUser(user) {
  const jane = await User.create(user);
}

export { CreateNewUser };
