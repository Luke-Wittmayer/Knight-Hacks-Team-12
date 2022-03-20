import internshipsDao from "../dao/internshipsDAO.js"
import bcrypt from "bcrypt"

// Class for logging in and signing up users
export default class UserAuthentication {

    static async signUp(req, res, next) {
        console.log("I'm in UserAuthentication class")
        const username = req.query.username ? req.query.username : null;
        const password = req.query.password ? req.query.password : null;

        if (username != null && password != null) {
            console.log("I'm in the UserAthentication if statement")
            const user = await internshipsDao.getUser(username)

            if(user != null){
                res.json({invalid : "User already exists"})
                return
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            internshipsDao.addUser(username, hashedPassword);
            res.json({success : "Creating user"})
        } else{
            console.log("Im in the UserAuthentication else statement")
            res.json({ error : "no query"})
        }
    }

    static async logIn(req, res, next) {
        console.log("I'm in the log in method")
        const username = req.query.username ? req.query.username : null;
        const password = req.query.password ? req.query.password : null;

        if(username != null && password != null){
            const user = await internshipsDao.getUser(username)

            if(user == null){
                res.json({invalid : "User does not exist"})
                return
            }

            bcrypt.compare(password, user.password).then(isMatch => {
                if(isMatch){
                    res.json({success : "Login successful"})
                    return
                } else {
                    res.json({error : "Password Incorrect"})
                    return
                }
            });
        }
    }
}