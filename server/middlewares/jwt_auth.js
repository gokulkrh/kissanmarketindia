import jwt from "jsonwebtoken";

function createToken(user) {
  const key = process.env.JWT_SECRET_KEY;
  let data = {
    time: new Date(),
    user_id: user,
  };
  const token = jwt.sign(data, "key", {
    expiresIn: "2h",
  });
  return token;
}

function ValidateToken() {}

function RefreshToken() {}

export { createToken, ValidateToken, RefreshToken };
