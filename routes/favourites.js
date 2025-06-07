const  {createfav,getallfav, unfav,}=require("../controllers/favourites");
const express=require("express");
const router=express.Router();

router.route("/favorite").post(createfav);

router.route("/favorite").delete(unfav);
router.route("/allfav").get(getallfav);

module.exports=router;