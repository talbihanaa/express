

const express = require('express');
const { getHome, getAbout, getContact } = require('../handlers/user');

const userRouter = express.Router();

userRouter.get('/', getHome);
userRouter.get('/about', getAbout);
userRouter.get('/contact', getContact);

module.exports = userRouter