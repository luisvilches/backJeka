const { io } = require("semplice");
const models = require("../models");

exports.find = (req,res) => {
    models.User.find({},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",totals:response.length,data:response});
        }
    })
}

exports.create = (req,res) => {
    let User = new models.User({
        name:req.body.name,
        lastName:req.body.lastName,
        Address:req.body.Address,
        city:req.body.city,
        region:req.body.region,
        password:req.body.password,
        mail:req.body.mail,
        rut:req.body.rut,
        avatar:req.body.avatar,
        cart:[],
        historyCart:[]
    });
    User.save((err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Create success",data:response});
            io.sockets.emit("update");
        }
    });
}

exports.update = (req,res) => {
    let User = new models.User({
        name:req.body.name,
        lastName:req.body.lastName,
        Address:req.body.Address,
        city:req.body.city,
        region:req.body.region,
        password:req.body.password,
        mail:req.body.mail,
        rut:req.body.rut,
        avatar:req.body.avatar,
        _id:req.params.id
    });

    models.User.update({_id:req.params.id},User,(err,response => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Update success",data:response});
            io.sockets.emit("update");
        }
    }));
}

exports.delete = (req,res) => {
    models.User.remove({_id:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Remove succes",data:response});
            io.sockets.emit("update");
        }
    })
}

exports.findById = (req,res) => {
    models.User.findById({_id:req.params.id},(err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Find success",data:response});
        }
    })
}


exports.addCart = (req,res) => {
    models.User.findOneAndUpdate(
        {_id:req.params.id},
        {$push: {cart: req.body.product}},
        {safe: true, upsert: true},
        (err,response) => {

        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"add to cart",data:response});
        }
    })
}


exports.superuser = (req,res) => {
    let User = new models.User({
        name:"Administrator",
        lastName:"Example",
        Address:"Example",
        city:"Example",
        region:"Example",
        password:"admin123",
        mail:"admin@admin.cl",
        rut:"11.111.111-1",
        avatar:"/images/user.png",
        cart:[],
        historyCart:[]
    });
    User.save((err,response) => {
        if(err){
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"Create success",data:response});
            io.sockets.emit("update");
        }
    });
}