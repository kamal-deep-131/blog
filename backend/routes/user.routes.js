import { Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'


const router = Router()
const JWT_SECRET = process.env.JWT_SECRET

//register route

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
        return res.json({ message: "Field is missing" })
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: 'User already exists' });
        }

        const hasedPassword = await bcrypt.hash(password, 12)

        const newUser = new User({
            username,
            email,
            password: hasedPassword,
        })

        await newUser.save()

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '2h' })

        return res.json({
            token,
            user: {
                id: newUser._id,
                name: newUser.username,
                email: newUser.email
            }
        })
    }
    catch (error) {
        console.log('Error in register: ', error)
    }
})

//login route 

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!(email && password)) {
        return res.json(
            { message: "Field is missing" }
        )
    }

    const newUser = await User.findOne({ email })

    if (!newUser) {
        return res.json({ message: "User not found" })
    }

    const isPassword = await bcrypt.compare(password, newUser.password)

    if (!isPassword) {
        res.json({
            message: "Password is wrong"
        })

        const token = jwt.sign(newUser._id, process.env.JWT_SECRET, { expiresIn: '2h' })

        return res.json({
            token,
            user: {
                id: newUser._id,
                name: newUser.username,
                email: newUser.email
            }
        })

    }
})



export default router