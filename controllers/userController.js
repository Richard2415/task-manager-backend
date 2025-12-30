import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const registeredUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const exisitingUser = await User.findOne({ email });

        if (exisitingUser) {
            return res.status(400).json({ message: 'Email already exists' })
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })

        res.status(201).json({
            message: 'User Registered Successfully',
            user: { id: createUser._id, email: createUser.email }
        })
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
}


export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        //Check user exists
        const user = await User.findOne({ email });
        if (!user) res.status(401).json({ message: 'User is not registered' });

        //Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) res.status(400).json({ message: 'Invalid Credentials' });

        //Create JWT
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.expiresIn || "1h" }
        )

        res.json({
            message: 'Logged In',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })

    }

    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await find().select('-password');
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}