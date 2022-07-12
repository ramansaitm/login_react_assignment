const Login = require("../models/index")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");

exports.login = async (req, res) => {

     const emailExist = await Login.findOne({Email:req.body.Email})
    if(emailExist) return res.status(400).send("Email is already exist");

    const nameExist = await Login.findOne({Name:req.body.Name})
    if(nameExist) return res.status(400).send("Name is already exist");
    
    const mobileExist = await Login.findOne({Mobile:req.body.Mobile})
    if(mobileExist) return res.status(400).send("Mobile is already exist");

    const user = await new Login({
    Name:req.body.Name,
    Email:req.body.Email,
    Mobile:req.body.Mobile,
})
        try{
           const saveduser = await user.save()
           const token = jwt.sign({_id:Login._id},process.env.SECRET,{expiresIn:600});
           res.cookie("auth",token,{httpOnly:true}).status(200).json({
               message:"Succesfully Login",
               token
               
           })
       }
       catch(err) {
           res.status(400).send(err);
       }
}
exports.logout = (req,res) => {
    res.clearCookie("auth").status(200).json({ message: "Successfully logged out 😏 🍀" });
       

   }