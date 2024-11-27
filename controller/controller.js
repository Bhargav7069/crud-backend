// const UserModel = require('../Models/Users');

import UserModel from '../Models/Users.js'

export const createUser  = async (req, res) => {
    try {
        console.log(req.body)
        const user = await UserModel.create(req.body);
        res.status(201).json({
            message: "User  created successfully",
            user: user
        });
    } catch (err) {
        res.status(400).json({
            message: "Error creating user",
            error: err.message 
        });
    }
};
export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving users",
            error: err.message
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById({ _id: id });
        if (!user) {
            return res.status(404).json({ message: "User  not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving user",
            error: err.message
        });
    }
};


export const updateUser  = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser  = await UserModel.findByIdAndUpdate(
            { _id: id },
            {
               name: req.body.name,
                email: req.body.email,
                phoneno: req.body.phoneno,
                age: req.body.age,
            },
            { new: true, runValidators: true } 
        );
        if (!updatedUser ) {
            return res.status(404).json({ message: "User  not found" });
        }

        res.status(200).json({
            message: "User  updated successfully",
            user: updatedUser 
        });
    } catch (err) {
        res.status(400).json({
            message: "Error updating user",
            error: err.message
        });
    }
};

export const deleteUser  = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedUser  = await UserModel.findByIdAndDelete({ _id: id });

        if (!deletedUser ) {
            return res.status(404).json({ message: "User  not found" });
        }

        res.status(200).json({
            message: "User  deleted successfully",
            user: deletedUser 
        });
    } catch (err) {
        res.status(400).json({
            message: "Error deleting user",
            error: err.message
        });
    }
};

// module.exports = {
//     createUser,
//     getUsers,get
//     getUserById,
//     updateUser,
//     deleteUser
// }


