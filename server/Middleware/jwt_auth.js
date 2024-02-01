import jwt from "jsonwebtoken";

function CreateToken(user) {
  const key = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    user_id: user,
  };
  const token = jwt.sign(data, "key", {
    expiresIn: 24 * 60 * 60,
  });
  return token;
}

function ValidateToken() {}

function RefreshToken() {}

export { CreateToken, ValidateToken, RefreshToken };
