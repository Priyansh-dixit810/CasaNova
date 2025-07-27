const User=require("../models/user.js");


module.exports.getsignup= (req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.postsignup = async(req,res)=>{
    try{
    let {username, email, password}=req.body;
    const newUser= new User({username,email});
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser ,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","User registered successfully");
        res.redirect("/listings");
    })
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.getlogin = (req,res)=>{
    res.render("users/login.ejs");
}

module.exports.postlogin= (req,res)=>{
    req.flash("success","Welcome back!!");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}
module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","logged you out");
        res.redirect("/listings");
    })
}