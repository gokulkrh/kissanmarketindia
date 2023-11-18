
export function LoginHandler(req, res) {
    res.status(200).json("Logged in successfully");
};

export function RegisterHandler(req, res) {
    res.status(200).json("User registered successfully");
};

export function FetchUserHandler(req, res) {
    res.status(200).json({ user: "swaglord" });
};
