const  {createvote,deleteVotes,totalvotes,individualsvotes,whomivoted}=require("../controllers/votes");
const express=require("express");
const router=express.Router();

router.route("/addvote").post(createvote);

router.route("/deletevote/id/:voter_id").delete(deleteVotes);
router.route("/allvotes").get(totalvotes);
router.route("/individualsvotes/id/:candidates_id").get(individualsvotes);
router.route("/whomivoted/id/:voter_id").get(whomivoted);
module.exports=router;