// Importation of librarys
import express from 'express';
import cors from "cors" ;
import bodyParser from "body-parser" ;
import mongoose from 'mongoose';

// Import local routers 
import postRouter from "./routes/posts.js" ;


// initialisation and uses of application
const app = express() ;
app.use(bodyParser.json({ limit: "30mb", extended: true})) ;
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true})) ;
app.use(cors()) ;


// Database URL and Port config
const MONGODB_URL = "mongodb+srv://ghassenkhamassi:MongoDBPassword@cluster0.olvrldg.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000 ;

// Routers of application
app.use('/posts', postRouter) ;


// Connection of MongoDB cloud and the server
mongoose.connect(MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log('server run')))
    .catch((error) => console.log(error.message)) ;
