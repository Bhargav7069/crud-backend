// const express = require('express');
// 
// const userController = require('../controller/controller');
 
import express from 'express'

import { getUserById } from '../controller/controller.js';
import { createUser } from '../controller/controller.js';
import { getUsers } from '../controller/controller.js';
import { updateUser } from '../controller/controller.js';
import { deleteUser} from '../controller/controller.js';

const router = express.Router();

router.post('/createUSer', createUser )
router.get('/',getUsers)
router.get('/getUser/:id',getUserById)
router.put('/updateUser/:id',updateUser)
router.delete('/deleteUser/:id',deleteUser)

export default router