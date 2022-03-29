import express from "express"
import UserAuth from "./userAuthentication.js"
import InternshipController from "./internships.controller.js"

const router = express.Router()


router.route("/addInternship").post(InternshipController.apiPostInternship);

router.route("/editInternship").put(InternshipController.apiUpdateInternship);

router.route("/deleteInternship").delete(InternshipController.apiDeleteInternship);

//router.route("/getInternship).get(InternshipController.apiGetInternship) will work on this later

// Route to sign up. Possibly change to a POST request.
router.route("/signup").post(UserAuth.signUp);

// Route to log in
router.route("/login").get(UserAuth.logIn);

export default router
