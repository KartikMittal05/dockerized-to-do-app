import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.route.js';
import {connectDB} from './config/db.js'; // Adjust the path as necessary

dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/todos",todoRoutes);


app.listen(5000, () => {
    connectDB(); // Ensure the database connection is established
    console.log("Server started at http://localhost:5000");
});
