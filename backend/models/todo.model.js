import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },

    // title: {
    //     type: String,
    //     required: true,
    // },
    // description: {
    //     type: String,
    //     required: true,
    // },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{timestamps: true})
const Todo = mongoose.model("Todo", todoSchema);
export default Todo;