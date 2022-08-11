const multer = require('multer')
// const uploadFile = require('../controllers/uploadFile')
const Document = require("../models/Document");
var path = require('path');
const sourcePath = 'public';
const recursive = require('recursive-fs');
const fs = require('fs');

const multerConfig = multer.diskStorage({
    
    destination: (req, file, callback) =>{
        callback(null, 'public/'),
        console.log(file)

    },
    filename: (req, file, callback) =>{
        const ext = file.mimetype.split('/')[1]
        callback(null, `${file.originalname}-${Date.now()}.${ext}`)
    },
});
const upload = multer({
    storage: multerConfig,
})

exports.uploadFile = upload.single('file')



exports.upload = async (req, res) => {
    console.log(req.body.university)
    const newUpload = new Document({
        title : req.body.title,
        code: parseInt(req.body.code),
        university: req.body.university,
        Coursedescription: req.body.description,
        file: {
            data: fs.readFileSync(path.join('public/' + req.file.filename)),
            contentType: req.file.mimetype,
        }
    });
    
    try{
        const response =  await newUpload.save();
        res.status(201).json(response);
        
    } catch(err){
        res.status(200).json(err);
    } finally{
        recursive.readdirr(sourcePath, function (err, dirs, files) {
            files.forEach((file) => {
                fs.unlinkSync(file)
            });
        })
    }
   
};