import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must has atleast six characters"]
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
})

export default mongoose.model("User", UserSchema);