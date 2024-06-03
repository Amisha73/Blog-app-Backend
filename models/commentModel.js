const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const commentSchema = new mangoose.Schema(
    {
        post :{
            type: mongoose.Schema.Types.ObjectId,
            ref : "Post", //references to the post model
        },
        user: { 
            type :String,
            require : true,
        },
        body:{
            type:String,
            require : true,
        }
    }
);

module.exports = mongoose.model("Comment", commentSchema);