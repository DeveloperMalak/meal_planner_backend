const  {addrecipe,getallrecipes,}=require("../controllers/recipes");
const express=require("express");
const router=express.Router();

router.route("/add").post(addrecipe);

router.route("/all").get(getallrecipes);


module.exports=router;