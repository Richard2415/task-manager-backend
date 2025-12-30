import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config();

const app = express();
const PORT = (process.env.PORT) || 5000;

//middlewares
app.use(express.json())
app.use(cors())


//mongoose connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to database"))
    .catch(() => console.error('Connection failed with database'))


app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(PORT, console.log(`Server is running on ${PORT}`));