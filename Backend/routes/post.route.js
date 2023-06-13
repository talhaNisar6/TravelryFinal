import express from "express";
import { uploadPost, updatePost, deletePost, getPost, allPosts, likePost } from "../controllers/post.controller.js";
const router = express.Router();

//for posts
//upload POST
router.post("/upload", uploadPost)

//Update POST
router.put("/:id", updatePost)

//Delete POST

router.delete("/:id",deletePost)

//GET POST

router.get("/:id",getPost)

//Like Dislike POST

router.put("/:id/like",likePost)

//GET ALL POSTS

router.get("/",allPosts)


export default router;
