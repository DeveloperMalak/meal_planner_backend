const  {addrecipe,getallrecipes,}=require("../controllers/recipes");
const express=require("express");
const router=express.Router();

router.route("/recipes").post(addrecipe);

router.route("/recipes").get(getallrecipes);


module.exports=router;