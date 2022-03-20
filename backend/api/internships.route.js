import express from "express"
import UserAuth from "./userAuthentication.js"

const router = express.Router()

router.route("/").get((req,res) => res.send("hello world"))

// Route to sign up. Possibly change to a POST request.
router.route("/signup").get(UserAuth.signUp);

// Route to log in
router.route("/login").get(UserAuth.logIn);

export default router