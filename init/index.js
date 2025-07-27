if(process.env.NODE_ENV!="production"){
  require('dotenv').config()
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const dbUrl = process.env.ATLAS_DB_URL;
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log(initData.data);
  console.log("data was initialized");
};

initDB();
