import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import mongoose from "mongoose";
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://jigansasatapathy:iIPr8pOIlfXpsml4@mongodatabasereview.b1g5w.mongodb.net/ReviewDataBase');
const db=mongoose.connection;
db.once('open',()=>{
    console.log("mongoDB connected");
});
const UserSchema =new mongoose.Schema({
    name:String,
    email:String,
    message:String
});
const User=mongoose.model("Review",UserSchema);
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
 
// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // assuming your EJS files are in a folder named 'views'

// Routes
app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/media-gallery', (req, res) => {
    res.render("media-gallery.ejs");
});

app.get('/contact', (req, res) => {
    res.render("contact.ejs");
});

app.get('/overview', (req, res) => {
    res.render("overview.ejs");
});

app.get('/board-members', (req, res) => {
    res.render("board_members.ejs");
});

app.get('/vision', (req, res) => {
    res.render("vision.ejs");
});
app.get('/partners', (req, res) => {
    res.render("partners.ejs");
});
app.get('/drr', (req, res) => {
    res.render("drr.ejs");
});
app.get('/board-members/jayant', (req, res) => {
    res.render("jjayant.ejs");
});
app.get('/disaster-preparedness', (req, res) => {
    res.render("disaster.ejs");
});
app.get('/board-members/aranya', (req, res) => {
    res.render("aranya.ejs");
});
app.get('/board-members/bhushan', (req, res) => {
    res.render("bhushan.ejs");
});
app.get('/board-members/sangeeta', (req, res) => {
    res.render("sangeeta.ejs");
});
app.get('/board-members/kusum', (req, res) => {
    res.render("kusum.ejs");
});
app.get('/board-members/pradeep', (req, res) => {
    res.render("pradeep.ejs");
});
app.get('/board-members/spbahu', (req, res) => {
    res.render("spbahu.ejs");
});
app.post('/submit-feedback',async (req,res)=>{
    console.log(req.body);
    const name=req.body.name;
    const msg=req.body.message;
    const email=req.body.email;
    const user=new User({
        name,
        email,
        msg
    })
    await user.save();
    console.log(user);
    
})
// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
