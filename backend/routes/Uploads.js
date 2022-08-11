const router = require ("express").Router();
const Document = require("../models/Document");
const upload = require("../middleware/upload")


router.post("/upload/doc" ,async (req,res)=>{
    
    //TODO: Error Handler for empty username and password
    // res.json({file: req.file });
    // let item = [];
    // recursive.readdirr(sourcePath, function (err, dirs, files) {
    //     files.forEach((file) => {
    //         console.log(file);
    //         item.push(file);
    //         fs.unlinkSync(file)
    //     });
    // })
    // console.log(item);
    console.log(req.body.title)

    const newUpload = new Document({
        title : req.body.title,
        code: parseInt(req.body.code),
        university: req.body.university,
        Coursedescription: req.body.description,
        // file: item,
    });
    
    try{
        const response =  await newUpload.save();
        res.status(201).json(response);
        recursive.readdirr(sourcePath, function (err, dirs, files) {
                files.forEach((file) => {
                    fs.unlinkSync(file)
             });
        })
    } catch(err){
        res.status(500).json(err);
    }
    // try{
    //     const savedFile = await newUpload.save();
    //     res.status(201).json(savedFile);
    // }catch(err){
    //     res.status(500).json(err);
    // }

});






module.exports =router;