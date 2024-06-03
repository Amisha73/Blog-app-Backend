const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const likeSchema = new mangoose.Schema(
    {
        post :{
            type: mongoose.Schema.Types.ObjectId,
            ref : "Post", //referces to the post model
        },
        user: {
            type :String,
            require : true,
        },
    }
);

module.exports = mongoose.model("Like", likeSchema);