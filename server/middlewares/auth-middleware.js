const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    // if (!token) {
    // }

    const jwtToken = token.replace("Bearer", "").trim();
    // console.log("Token received:", jwtToken);

    try {
        const inVerefied = jwt.verify(jwtToken, process.env.JWT_SECURTE_KEY);
        const userData = await User.findOne({ email: inVerefied.email }).select({
            password: 0,
        });
        // console.log("Token verified:", userData);
        req.user = userData;
        req.token = jwtToken;
        req.userId = userData._id;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ message: "Access denied, no token provided" });
    }
};

module.exports = authMiddleware;
