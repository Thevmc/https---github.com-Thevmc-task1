const {getuser}=require("../service/auth")
async function restricttologged(req,res,next)
{
    const userid=req.cookies.uid
    if(!userid)
    {
      return res.send("please login ")
    }
    const user=getuser(userid)
    if(!user)
    {
        return res.send("please login again")
    }
    req.user=user;
    next();
}
module.exports={restricttologged}