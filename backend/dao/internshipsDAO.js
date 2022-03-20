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
        let account = {username : user, password : psw};
        database.insertOne(account, (err, res) => {
            if (err) throw err
            console.log('Successfully inserted account to database')
        })
    }
}