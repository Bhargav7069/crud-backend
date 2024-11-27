// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./route/route');
// const db = require('./config/db');

import express from 'express'
import cors from 'cors';
import userRoutes from './route/route.js'
import mongo from './config/db.js';

const app = express();
app.use(cors({origin:['http://localhost:3002']}));
app.use(express.json());

// mongoose.connect("mongodb+srv://bhargavkikani9999:B1YFKuLYwDxX9lQF@cluster0.otzmo.mongodb.net/Crud")
// .then(() => console.log("Connected to MongoDB"))
// .catch((err) => console.error("Error connecting to MongoDB:", err));
mongo()
app.use('/users', userRoutes);
 const port=8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});