const { createModel } = require("semplice");

module.exports = createModel("Product",{
   name:String,
   urlName:String,
   price:Number,
   cover:String,
   gallery:Array,
   useProduct:String,
   detail:[
    {
        item:String
    }
   ],
   benefit:[
       {
           item:String
       }
   ]
});
            