const { router, routePrivate } = require("semplice");
module.exports = router;
const ctrl = require("../controllers");

router.get("/",routePrivate, ctrl.main.main);
                            
 /* Routes for User */ 

router.get("/User",routePrivate, ctrl.User.find);
router.get("/User/id/:id",routePrivate, ctrl.User.findById);
router.post("/User",routePrivate, ctrl.User.create);
router.put("/User/:id",routePrivate, ctrl.User.update);
router.delete("/User/:id",routePrivate, ctrl.User.delete);
                    
 /* Routes for Product */ 

router.get("/Product",routePrivate, ctrl.Product.find);
router.get("/Product/id/:id",routePrivate, ctrl.Product.findById);
router.post("/Product",routePrivate, ctrl.Product.create);
router.put("/Product/:id",routePrivate, ctrl.Product.update);
router.delete("/Product/:id",routePrivate, ctrl.Product.delete);

router.get("/UserDefault/generate/superUser/",ctrl.User.superuser);
                    