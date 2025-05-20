const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

// secure the password using bcrypt
userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_pasword = await bcrypt.hash(user.password, saltRound);
        user.password = hash_pasword;
    } catch (error) {
        next(error);
    }
});

// compare the password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

// json web token
userSchema.methods.generateToken = async function () {
    // this is a payload
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SECURTE_KEY,
            {
                expiresIn: "20d",
            }
        );
    } catch (error) {
        console.error(error);
    }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
