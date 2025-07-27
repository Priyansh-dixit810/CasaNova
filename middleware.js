const Listing = require("./models/listing");
const Review = require("./models/reviews");


const ExpressError=require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");

module.exports.isloggedin = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must be logged in!");
        console.log(req.originalUrl);
        return res.redirect("/login");
    }
    next();
}
 
module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req,res,next)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.ValidateListing = (req,res,next)=>{
  let {error}=listingSchema.validate(req.body);
    if(error){
      throw new ExpressError(400,result.error);
    }else{
      next();
    }
}

module.exports.ValidateReview = (req,res,next)=>{
  let {error}=reviewSchema.validate(req.body);
    if(error){
      throw new ExpressError(400,result.error);
    }else{
      next();
    }
}

module.exports.isReviewOwner = async (req,res,next)=>{
    let {id,reviewId}=req.params;
    let review= await Review.findById(reviewId);
    console.log(review.author._id);
    console.log(res.locals.currUser._id);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}