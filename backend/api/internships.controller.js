import internshipsDAO from "../dao/internshipsDAO.js"

export default class InternshipController{

    static async apiPostInternship(req, res,next) {
       /*What we input into Postman.
         userID is the user ObjectID from mongoDB. This lets us know which user
         to add internships too*/
        try {
          const userID = req.body.id
          const name = req.body.text
          const date = new Date()
          const email = req.body.email
          const description = req.body.Description

           // After we get the input from the above we send it to the InternshipsDAO
           // to be inserted into the database
          const InternshipResponse = await internshipsDAO.addInternship(
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
      }


      
      static async apiUpdateInternship(req,res,next){
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
          const InternshipResponse = await internshipsDAO.updateInternship(
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
      }



}
