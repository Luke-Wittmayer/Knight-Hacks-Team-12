import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let database

export default class internshipsDAO {
    static async injectDB(conn) {
        if(database){
            return
        }
        try{
            database = await conn.db(process.env.INTERNTRACKER_COLLECTION_NAME).collection("users")
            console.log("Successfully Connected to Database")
        } catch(e){
            console.error(
                `Unable to establish a collection handle in internshipsDAO: ${e}`,
            )
        }
    }

    static async getUser(user) {
        return database.findOne({ username : user })
    }

    static async addUser(user, psw) {
        /*let account = {username : user, password : psw};
        database.insertOne(account, (err, res) => {
            if (err) throw err
            console.log('Successfully inserted account to database')
        })*/
        try{
            const userInfo = {
                username: user,
                password: psw
            }

            return await database.insertOne(userInfo)
        } catch(e){
            console.error('Unable to add user: ${e}')
            return {error: e}
        }
    }
    
    
    static async addInternship(ID,name, date, email,description) {
    // we take the input sent from internship controller and store it in internshipInfo below
    try {
      const internshipInfo = { 
          Company: name,
          Date: date,
          Email: email,
          Description: description,
       }
           
       // Insert internshipInfo into our database
      return await database.updateOne(
        { _id:ObjectId(ID) }, {$push:{Internships:internshipInfo}},
      )
    } catch (e) {
      console.error(`Unable to add internship: ${e}`)
      return { error: e }
      }
  }



    static async updateInternship(userID,email,description,name,choice){  
    /*Each of these if and else statements lets us know which part of the Internship
      information we are updating. We can change Email , Description or Both.
      depending on the choice we update the associated internship information sent from the
      internships controller */
    try{
      
        if(choice== "email"){
        const updateResponse = await database.updateOne(
        { _id:ObjectId(userID),"Internships.Company":name}, {$set: {"Internships.$.Email":email}} 
        )
        return updateResponse}
          
        else if(choice=="description"){
        const updateResponse = await database.updateOne(
        { _id:ObjectId(userID),"Internships.Company":name }, {$set:{"Internships.$.Description":description}}
        )
        return updateResponse}
        

        else if(choice=="both"){
        const updateResponse = await database.updateOne(
        { _id:ObjectId(userID),"Internships.Company":name }, {$set:{"Internships.$.Description":description,"Internships.$.Email":email}}
        )
        return updateResponse}

        else
        {
          console.error('Unable to edit Internship: ${e}')
            return {error: e}
        }
    
    } catch(e){
      console.error(`Unable to update internship: ${e}`)
      return { error: e }
    }

    
  }
    
}
