const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync=require("../utils/wrapAsync.js");
const {isloggedin, isOwner, ValidateListing}=require("../middleware.js");
const listingcontroller = require("../controller/listing.js");
const multer  = require('multer');
const {storage}= require("../CloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingcontroller.index))
    .post(isloggedin,upload.single('listing[image]'),ValidateListing,wrapAsync(listingcontroller.create));

router.get("/new", isloggedin,listingcontroller.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingcontroller.show))
    .put(isloggedin,isOwner,upload.single('listing[image]'),ValidateListing,wrapAsync(listingcontroller.update))
    .delete(isloggedin, isOwner,wrapAsync(listingcontroller.delete));


router.get("/:id/edit", isloggedin,isOwner,wrapAsync(listingcontroller.edit));

router.delete("/:id",isloggedin, isOwner,wrapAsync(listingcontroller.delete));

module.exports = router;