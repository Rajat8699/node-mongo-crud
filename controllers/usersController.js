const { default: mongoose, pluralize } = require("mongoose");
const Users = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const existingUser = await Users.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist." });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials." });
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            "test",       // As 'test' is a secret key it should be in env
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong." });
    }
};

const signupController = async (req, res, next) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    try {
        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = Users.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
        });

        const token = jwt.sign({ email: result.email, id: result._id }, "test", {
            expiresIn: "1h",
        });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong." });
    }
};

module.exports = { loginController, signupController };
