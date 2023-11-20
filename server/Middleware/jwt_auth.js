import jwt from "jsonwebtoken"

function CreateToken(username) {
    const key = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        username: username,
    };
    const token = jwt.sign(data, key);
    return token;
};

function ValidateToken() {};

function RefreshToken() {};

export {
    CreateToken,
    ValidateToken,
    RefreshToken
};