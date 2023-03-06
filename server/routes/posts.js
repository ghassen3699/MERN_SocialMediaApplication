import express from "express";

import { getPosts, createPost } from "../controllers/posts";

const router = express.Router() ;


// Get all Posts 
router.get('/',getPosts);


// create a new Post and send it to the database
router.post('/', createPost);



export default router