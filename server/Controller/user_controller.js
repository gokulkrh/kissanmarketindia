import {
    Login,
    Register,
} from '../Service/Users/users.js'

import {
    ValidateLoginRequest,
    ValidateRegisterRequest,
} from '../Validator/users.js'

import {
    CreateToken
} from '../Middleware/jwt_auth.js'


async function LoginHandler(req, res, next) {
    const request = {
        username: req.body.username,
        password: req.body.password,
    };

    try {
        var err = ValidateLoginRequest(request);
        if (err) {
            res.status(400).json("invalid request Idiot!!");
            return;
        }
    } catch (error) {
        res.status(500).json("unexpected error");
        return;
    }

    try {
        const valid_user = await Login(request) 
        if (valid_user) {
            const token = CreateToken(request.username)
            res.status(200).json({token: token});
            return;
        }
        res.status(400).json("create account first");
    } catch (error) {
        console.log(error)
        res.status(500).json("something went wrong");
    }
};

async function RegisterHandler(req, res) {
    res.status(200).json("User registered successfully");
};

async function FetchUserHandler(req, res) {
    res.status(200).json({ user: "swaglord" });
};

async function UpdateUserHandler(req, res) {};

export {
    LoginHandler,
    RegisterHandler,
    FetchUserHandler,
    UpdateUserHandler
};