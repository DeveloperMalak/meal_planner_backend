const  {createvote,deleteVotes,totalvotes,individualsvotes}=require("../controllers/votes");
const express=require("express");
const router=express.Router();

router.route("/addvote").post(createvote);

router.route("/deletevote/id/:voter_id").delete(deleteVotes);
router.route("/allvotes").get(totalvotes);
router.route("/individualvotes/id/:candidates_id").get(individualsvotes);
module.exports=router;