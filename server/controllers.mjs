import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const users = [
    { email: "majd@", password: "1234" }
]

export default async function Login(req, res) {
    const { email, password } = req.body
    const user = users.find(user => user.email === email)
    if (!user) {
       return res.status(400)
    }
    const passwordvalid = bcrypt.compare(password, user.password)
    if (!passwordvalid) {
        return res.status(404)
    }
    const token = jwt.sign({ email }, process.env.KEY, { expiresIn: '1h' })
    res.send('hello').cookie("token", token, { httpOnly: true, secure: true, maxAge: 3600000, sameSite: "Strict" })
}


export const verifyToken = (req, res, next) => {
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
        res.send(req.userinfo)
        next()
    })
}