const { io } = require("semplice");
const models = require("../models");

exports.find = (req,res) => {
    models.Product.find({},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",totals:response.length,data:response});
        }
    })
}

exports.create = (req,res) => {
    let Product = new models.Product({
        name:req.body.name,
        urlName:req.body.urlName,
        price:req.body.price,
        cover:req.body.cover,
        gallery:req.body.gallery,
        useProduct:req.body.useProduct,
        detail:req.body.detail,
        benefit:req.body.benefit
    });
    Product.save((err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Create success",data:response});
            io.sockets.emit("update");
        }
    });
}

exports.update = (req,res) => {
    let Product = new models.Product({
        name:req.body.name,
        urlName:req.body.urlName,
        price:req.body.price,
        cover:req.body.cover,
        gallery:req.body.gallery,
        useProduct:req.body.useProduct,
        detail:req.body.detail,
        benefit:req.body.benefit,
        _id:req.params.id
    });

    models.Product.update({_id:req.params.id},Product,(err,response => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Update success",data:response});
            io.sockets.emit("update");
        }
    }));
}

exports.delete = (req,res) => {
    models.Product.remove({_id:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Remove succes",data:response});
            io.sockets.emit("update");
        }
    })
}

exports.findById = (req,res) => {
    models.Product.findById({_id:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",data:response});
        }
    })
}


