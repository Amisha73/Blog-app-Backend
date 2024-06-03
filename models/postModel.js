const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");
const LikeController = require("../controllers/LikeController");

const postSchema = new mangoose.Schema(
    {
        title : {
            type : String,
            require : true,
            maxLength : 50,
        },
        body:{
            type : String,
            require : true,
            maxLength : 50,
        },
        likes :[{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Like",
        }],
        comments : [{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }]
    }
);

module.exports = mongoose.model("Post", postSchema);