// const mongoose = require('mongoose');
import mongoose from "mongoose";

const mongo = () => {
    mongoose.connect("mongodb+srv://bhargavkikani9999:B1YFKuLYwDxX9lQF@cluster0.otzmo.mongodb.net/Crud")
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("Error connecting to MongoDB:", err));
};

export default mongo;