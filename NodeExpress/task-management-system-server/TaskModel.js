import mongoose from "mongoose";

const TaskModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {timestamps: true})

export default mongoose.model('tasks', TaskModel)