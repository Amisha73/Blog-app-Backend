const express = require("express");
const router = express.Router();

// import controllers

const {createComment}= require("../controllers/commentController");
const {createPost,getAllPosts}= require("../controllers/postController");
const {dummyLink,likePost, unlikePost}= require("../controllers/LikeController");

// define APIs
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost); 
router.post("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

module.exports = router;