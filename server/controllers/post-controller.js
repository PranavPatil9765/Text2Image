const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const uploadToCloudinary = require('../utilities/cloudinary.js')
const db = require('../utilities/mongodb.js');



const postcontroller = async(req,res)=>{
	try {
		const {username,prompt} = req.body;
		const file = req.file;
		const result = await uploadToCloudinary(file.buffer);
		const url = result.secure_url;
		const data = new db({
			username,
			prompt,
			image:url,
		})
		data.save();
		res.status(200).json({msg:"success"});
		return;
	} catch (error) {
		console.log('internal server error at postcontroller');
		res.status(500) ;
	}
}

module.exports = postcontroller;
