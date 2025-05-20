// const bcrypt = require('bcryptjs');
const User = require('../models/user_model');


const home = async (req, res) => {
    try {
        res
            .status(200)
            .send('This is home page')
    } catch (error) {
        console.log(error);
    }
}

// Register  user
const register = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400)
                .json({ message: 'Email already exists' });
        }

        // hash the password
        // const saltRound = 10;
        // const hash_pasword = await bcrypt.hash(password, saltRound)

        const userCreated = await User.create({
            username,
            email,
            password,
            phone
        });

        res
            .status(201)
            .json({
                msg: "Registration successful",
                token: await userCreated.generateToken(),
                UserId: userCreated._id.toString()
            });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json('Internal Server error');
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        // console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if (user) {
            res
                .status(200)
                .json({
                    msg: "Login successful",
                    token: await userExist.generateToken(),
                    UserId: userExist._id.toString()
                });
        } else {
            res.status(401).json({ message: "Invalid Email or Password" });
        }
    } catch (error) {
        res.status(500).json('Internal Server error');
    }
}

module.exports = { home, register, login };