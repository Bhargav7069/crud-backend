// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const UserModel = require('./Models/Users')

// const app = express();
// app.use(cors()); 
// app.use(express.json());

// mongoose.connect("mongodb+srv://bhargavkikani9999:B1YFKuLYwDxX9lQF@cluster0.otzmo.mongodb.net/Crud") 
    

//  .then(() => console.log("Connected to MongoDB"))
//  .catch((err) => console.error("Error connecting to MongoDB:", err));


// app.post('/createUser', (req, res) => {
//     UserModel.create(req.body)
//         .then((users) => res.json(users))
//         .catch(err => res.json(err))
// });


// app.get('/', (req, res) => {
//     UserModel.find({})
//         .then((users) => res.json(users))
//         .catch(err => res.json(err))
// });


// app.get('/getUSer/:id', (req, res) => {
//     const id=req.params.id;
//     UserModel.findById({_id:id})
//         .then((users) => res.json(users))
//         .catch(err => res.json(err))
// })

// app.put('/updateUser/:id', (req, res) => {
//     const id=req.params.id;
//     UserModel.findByIdAndUpdate({_id:id},{
//         name:req.body.name,
//         email:req.body.email,
//         phoneno:req.body.phoneno,
//         age:req.body.age,
//     })
//         .then((users) => res.json(users))
//         .catch(err => res.json(err))
// })

// app.delete('/deleteUSer/:id', (req, res) => {
//     const id=req.params.id;
//     UserModel.findByIdAndDelete({_id:id})
//         .then((users) => res.json(users))
//         .catch(err => res.json(err))
// })
// app.listen(8080, () => {
//     console.log("Server is running");

// })











