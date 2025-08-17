const {getfoodMenu, updatefoodMenu, createfoodmenu}=require("../controllers/foodmenu");
const express=require("express")
const router=express.Router();
router.route("/view").get(getfoodMenu);
router.route("/updatemenu").patch(updatefoodMenu);
router.route("/add").post(createfoodmenu);
module.exports=router