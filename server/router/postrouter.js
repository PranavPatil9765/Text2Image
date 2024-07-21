const express = require('express');
const router = express.Router();
const postcontroller = require('../controllers/post-controller');
const multer = require('multer');
const storage = multer.memoryStorage(); // or diskStorage
const upload = multer({ storage: storage });
const db = require('../utilities/mongodb.js');


router.route("/submit").post(upload.single('file'),postcontroller);
router.route("/data").get(async (req,res)=>{
    const alldata = await db.find();
    res.status(200).json(alldata);
    return;
});


module.exports = router;