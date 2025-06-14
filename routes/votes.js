const  {createvote,deleteVotes,totalvotes,}=require("../controllers/votes");
const express=require("express");
const router=express.Router();

router.route("/addvote").post(createvote);

router.route("/deletevote").delete(deleteVotes);
router.route("/allvotes").get(totalvotes);

module.exports=router;