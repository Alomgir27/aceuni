const express = require('express')

const { upload, uploadFile } = require('../controllers/userContraoller')

const router = express.Router()


// localhost:3001/user/upload

router.post('/upload', uploadFile, upload)
module.exports = router;