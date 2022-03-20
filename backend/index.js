import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import internshipsDAO from "./dao/internshipsDAO.js";

dotenv.config()
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000

//Connects to MongoDB Database
MongoClient.connect(process.env.INTERNTRACKER_DB_URL,
{
    maxPoolSize: 5,
    wtimeoutMS: 2500,
    useNewUrlParser: true

})
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await internshipsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening to port ${port}`)
    })
})