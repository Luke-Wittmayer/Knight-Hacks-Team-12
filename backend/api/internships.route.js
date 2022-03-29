import express from "express"
import UserAuth from "./userAuthentication.js"
import InternshipController from "./internships.controller.js"

const router = express.Router()

//replaced Helloworld 
/*router
.route("/")
.post(InternshipController.apiPostInternship)
.put(InternshipController.apiUpdateInternship)*/
/*still working on these two.
.delete(InternshipCtrl.apiDeleteInternship)
.get(InternshipCtrl.apiGetInternships)
*/

router.route("/addInternship").post(InternshipController.apiPostInternship);

router.route("/editInternship").put(InternshipController.apiUpdateInternship);

// Route to sign up. Possibly change to a POST request.
router.route("/signup").post(UserAuth.signUp);

// Route to log in
router.route("/login").get(UserAuth.logIn);

export default router
