const mangoose = require("mongoose");

//  jo bhi env wali file ke config ko load kr deta hai process wali file ke andr
require("dotenv").config();
const dbConnect = () => {
    mangoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => { console.log("DB connection successful") })
        .catch((error) => {
            console.log("received an error");
            console.error(error.message);
            // flow braek kardeta h as soon as possible exit kardeta h
            process.exit(1);
        });
}

module.exports = dbConnect;