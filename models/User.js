const { createModel } = require("semplice");

module.exports = createModel("User",{
   name:String,
   lastName:String,
   Address:String,
   city:String,
   region:String,
   password:String,
   mail:String,
   rut:String,
   avatar:String,
   cart:[
       {
        name:String,
        price:Number,
        cover:String,
        qualy:Number,
        id_product:String
       }
   ],
   historyCart:[
    {
        id_product:String,
        date:Date
    }
   ]
});
            