import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../db.mjs'

export default async function Login(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({email})
    if (!user) {
       return res.status(400).send("")
    }
    const passwordvalid = bcrypt.compare(password, user.password)
    if (!passwordvalid) {
        return res.status(404).send("")
    }
    const token = jwt.sign({ email }, process.env.KEY, { expiresIn: '1h' })
    res.cookie("token", token, { httpOnly: true, secure: true, maxAge: 3600000, sameSite: "Strict" })
    res.send("good")
}


export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(400)
        }
        jwt.verify(token, process.env.KEY, (err, user) => {
            if (err) {
                return res.status(404)
            }
            console.log(user)
            req.userinfo = user
            next()
        })
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send("no token was found")
    }
}