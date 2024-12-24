const BlogModel = require("../model/Blog");

const index = async (req, res, next) => {
    const data = await BlogModel.find();
    res.status(200).json({
        msg : "success",
        data
    });
}

const create = async (req, res, next) => {
    try {
        
        await BlogModel.create(req.body);
    
        res.status(200).json({
            msg : "success"
        })
    }catch(err) {
        res.status(500).json({
            msg : err
        })
    }
}

const  show = async (req, res, next) => {
    try {
        const data = await BlogModel.findById(req.params.id);
        res.status(200).json({
            msg : "success",
            data
        });
    }catch(err){
        res.status(500).json({
            msg : err.toString()
        })
    }
}

const  update =async (req, res, next) => {
    try {
        
        const dataExist = await BlogModel.findById(req.params.id).exec();
    
        if (dataExist) {
            await BlogModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                    msg : "success"
                });
        }else{
            throw new Error(`Not Found`);
        }
        
        }catch(err){
            res.status(500).json({
                msg : err.toString()
            })
        }
}

const destroy = async (req, res,) => {
    try {
    const dataExist = await BlogModel.findById(req.params.id).exec();
    
    if (dataExist) {
        await BlogModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
                msg : "success"
            });
    }else{
        throw new Error(`Not Found`);
    }
    
    }catch(err){
        res.status(500).json({
            msg : err.toString()
        })
    }
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}