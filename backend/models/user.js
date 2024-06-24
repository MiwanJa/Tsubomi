const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const  Joi = require('joi');
const passwordComplexity = require("joi-password-complexity")


const userSchema = new mongoose.Schema({
    firstName: {type:String, require:true},
    lastName: {type:String, require:true},
    email: {type:String, require:true},
    password: {type:String, require:true},
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign.apply({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresln: "4d"})
    return token
};

const User = mongoose.model("user", userSchema)

const validate = (date) => {
    const schema = Joi.object({
        firstName:Joi.string().required().label("First Name"),
        lastName:Joi.string().required().label("Last Name"),
        email:Joi.string().email().required().label("Email"),
        password:passwordComplexity().require().label("Password")
    });
    return schema.validate(date)
};

module.exports = {User, validate}