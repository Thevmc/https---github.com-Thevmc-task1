const express=require("express");
const router=express.Router();

const {Signup,getmethod,getmethodbyid,postmethod,patchmethod,Loginmethod, deletemethodbyid}=require("../controllers/user")

router.route('/').get(getmethod).post(postmethod)

router.route('/register').post(Signup)

router.route('/login').post(Loginmethod)

router.route('/:id').get(getmethodbyid).patch(patchmethod).delete(deletemethodbyid)


module.exports=router;