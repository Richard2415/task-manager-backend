import jwt from 'jsonwebtoken'


export const protect = (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({ message: 'User is not Authorized' })
        }

        const authToken = authHeader.split(' ')[1]

        const decoded = jwt.verify(authToken, process.env.JWT_SECRET);

        req.user = { id: decoded.userId, email: decoded.email, role: decoded.user };

        next();
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}