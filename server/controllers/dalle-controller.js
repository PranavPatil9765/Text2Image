const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


async function query(prompt) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
		{
			headers: {
				"Authorization": process.env.TOKEN,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({
                inputs:prompt,
            }),
		}
	);
    const arrayBuffer = await response.arrayBuffer(); // Convert response to ArrayBuffer

	return Buffer.from(arrayBuffer); // Convert ArrayBuffer to Buffer
}

const dallecontroller = async(req,res)=>{
	try {
		
		const {prompt} = req.body;
		const imagebuffer = await query(prompt);
		// const blob = new Blob([imagebuffer], { type: 'image/jpeg' });
        // Create a Blob URL
        // const url = URL.createObjectURL(blob);
		// console.log(url);
		// res.status(200).json({url:url});
		
		res.writeHead(200, {
			'Content-Type': 'image/png', 
			'Content-Length': imagebuffer.length
		});
		res.end(imagebuffer);

	} catch (error) {
		console.log('internal server error at dallecontroller');
		res.status(500) ;
	}
}

module.exports = dallecontroller;
