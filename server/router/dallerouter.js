const express = require('express');
const router = express.Router();
const dallecontroller = require('../controllers/dalle-controller');

router.route("/generate").post(dallecontroller);

module.exports = router;