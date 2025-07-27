const Reviews= require("../models/reviews");
const Listing = require("../models/listing.js");

module.exports.addNewReview = async (req,res,next)=>{
  let {review} = req.body;
  let listing = await Listing.findById(req.params.id).populate('reviews').populate('owner');
  let newreview = new Reviews(review);
  newreview.author=req.user._id;
  listing.reviews.push(newreview);
  await newreview.save();
  await listing.save();
  req.flash("success", "Review added");
  res.redirect(`/listings/${req.params.id}`);
};

module.exports.deleteReview= async (req,res)=>{
  let { id,reviewId } = req.params;
  await Listing.findByIdAndUpdate(id,{$pull: {review: reviewId}});
  await Reviews.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted!");
  res.redirect(`/listings`);
};
