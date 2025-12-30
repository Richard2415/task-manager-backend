import express from 'express';
import { getAllUsers, loginUser, registeredUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizationRoles } from '../middleware/roleMiddleware.js'

const router = express.Router();


router.post('/register', registeredUser);
router.post('/login', loginUser);

router.get('/getAllUsers', protect, authorizationRoles('ADMIN'), getAllUsers);

export default router;