const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync=require("../utils/wrapAsync.js");
const {isloggedin,ValidateReview, isReviewOwner}=require("../middleware.js");
const reviewcontroller = require("../controller/review.js");


router.post("/",isloggedin,ValidateReview,wrapAsync(reviewcontroller.addNewReview));
router.delete("/:reviewId",isloggedin,isReviewOwner, wrapAsync(reviewcontroller.deleteReview));

module.exports = router;