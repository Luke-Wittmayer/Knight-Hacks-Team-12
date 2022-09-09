import express from "express"
import internshipsDao from "../dao/internshipsDAO.js"
import bcrypt from "bcrypt"


const router = express.Router()


router.route("/addInternship").post(async (req, res) => {
    try {
        const userID = req.body.id
        const name = req.body.text
        const date = new Date()
        const email = req.body.email
        const description = req.body.Description

         // After we get the input from the above we send it to the InternshipsDAO
         // to be inserted into the database
        const InternshipResponse = await internshipsDao.addInternship(
          userID,
          name,
          date,
          email,
          description,
        
        )
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
    
});

router.route("/editInternship").put(async (req, res) => {
        //Same as above. This is what we input into Postman. 
        // userID and name are important.It lets mongoDB know which user and  Internship we are updating
        try{
            const userID = req.body.id
            const email = req.body.email
            const description = req.body.Description
            const name = req.body.text
            const choice = req.body.choice
            
            // Must make a choice on which element to change in Internship array ie: email, Description, both
            if(choice==null){
              res.json({invalid : "Missing choice"})
              return
          }
  
            // Send input from above to DAO to attempt update of internship array
            const InternshipResponse = await internshipsDao.updateInternship(
             userID,
             email,
             description,
             name,
             choice
            )
  
            var { error } = InternshipResponse
            if (error) {
            res.status(400).json({ error })
          }
          res.json({ status: "success" })
          } catch (e) {
          res.status(500).json({ error: e.message })
          }
        });

router.route("/deleteInternship").delete(async (req, res) => {
    try {

        const userID = req.body.id
        const name = req.body.text

        if(userID==null||name==null)
        res.json({invalid : "Please enter userID and Company Name"})

        const deleteResponse = await internshipsDao.deleteInternship(userID,name)


        var { error } = deleteResponse
        if (error) {
        res.status(400).json({ error })
        }
        res.json({ status: "success" }) 
      } catch (e) {
        res.status(500).json({error: e.message})
        }

    });

//router.route("/getInternship).get(InternshipController.apiGetInternship) will work on this later

// Route to sign up.
router.route("/signup").post(async (req, res) => {
    console.log("I'm in UserAuthentication class")
    const username = req.body.username ? req.body.username : null;
    const password = req.body.password ? req.body.password : null;

    if (username != null && password != null) {
        console.log("I'm in the UserAthentication if statement")
        const user = await internshipsDao.getUser(username)

        if(user != null){
            return res.status(400).json({message : "User already exists"})
         }

        const hashedPassword = await bcrypt.hash(password, 10);
        internshipsDao.addUser(username, hashedPassword);
        return res.status(200).json({message : "Creating user"})

    } else{
        console.log("Im in the UserAuthentication else statement")
        return res.status(400).json({ message : "no query"})
    }
})

// Route to log in
router.route("/login").post(async (req, res) => {
    console.log("I'm in the log in method")
    const username = req.body.username ? req.body.username : null;
    const password = req.body.password ? req.body.password : null;

    if(username != null && password != null){
        const user = await internshipsDao.getUser(username)

        if(user == null){
            return res.status(400).json({message : "User does not exist"})
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                return res.status(200).json({message : "Login successful", id: user._id})
            } else {
                return res.status(400).json({message : "Password Incorrect"})
            }
        })
    }
})

export default router
