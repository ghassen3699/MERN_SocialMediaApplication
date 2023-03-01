import PostMessage from "../models/postMessage";


// Get all posts from database
export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find()
        console.log(postMessages) ;
        res.status(200).json(postMessages)
    }catch(error){
        res.status(404).json({error: error.message})
    }
};


// Create a new post and save it in database
export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post) ;

    try{
        await newPost.save() ;
        res.status(201).json(newPost)
    }catch(error){
        res.status(404).json({error: error.message})
    }
};