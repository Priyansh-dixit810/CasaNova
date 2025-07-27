const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/user.js");



router.get("/signup",userController.getsignup);

router.post("/signup", wrapAsync(userController.postsignup));

router.get("/login",userController.getlogin);

router.post("/login",saveRedirectUrl,passport.authenticate("local", {failureRedirect: '/login' , failureFlash: true}),userController.postlogin)

router.get("/logout",userController.logout);
module.exports = router;