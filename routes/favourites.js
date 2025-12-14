const  {createfav,getallfav, unfav,}=require("../controllers/favourites");
const express=require("express");
const router=express.Router();

router.route("/add").post(createfav);

router.route("/delete/user/:user_id/recipe/:recipe_id").delete(unfav);
router.route("/allmyfav").get(getallfav);

module.exports=router;