const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const { signupSchema, loginSchema } = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middlewares");



router.route("/").get(authControllers.home);

router.route('/register').post(validate(signupSchema), authControllers.register);

router.route('/login').post(validate(loginSchema), authControllers.login);

module.exports = router;