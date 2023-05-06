import express from "express";
import {addPost, deletePost, getPost, getPosts, updatePost} from "../cons/post.js"

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost) 

export default router