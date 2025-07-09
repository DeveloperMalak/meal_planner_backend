const  {getallUsers,registeruser, loginuser,}=require("../controllers/users");
const express=require("express");
const router=express.Router();

router.route("/register").post(registeruser);

router.route("/login").post(loginuser);
router.route("/allusers").get(getallUsers);
router.route("/id").get(getUserInfo);
module.exports=router;