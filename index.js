import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import env from "dotenv";
const app = express();
import {dirname} from 'path';
const port = 3000;
env.config();
console.log(process.env.MONGODB_PASSWORD);
mongoose.connect('mongodb+srv://jigansasatapathy:'+process.env.MONGODB_PASSWORD+'@mongodatabasereview.b1g5w.mongodb.net/ReviewDataBase');
const db=mongoose.connection;
db.once('open',()=>{ 
    console.log("mongoDB connected");
});
const UserSchema =new mongoose.Schema({
    name:String,
    email:String,
    message:String
});
const PartnerDbSchema= new mongoose.Schema({
    _id:String,
    Name:String,
    Location:String,
    Person_Name:String, 
    Phone_no:String
},{strict:'false'});
const User=mongoose.model("Review",UserSchema);
const Data=mongoose.model("exceldatas",PartnerDbSchema);
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
 
// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // assuming your EJS files are in a folder named 'views'

// Routes
app.get('/', (req, res) => {
    res.render(__dirname+"/views/index.ejs");
});

app.get('/media-gallery', (req, res) => {
    res.render("media-gallery.ejs");
});

app.get('/contact', (req, res) => {
    res.render("contact.ejs",{
        alert:false
    });
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
app.get('/partners', async (req, res) => {
    let datadb= await (Data.find({})); 
    console.log(datadb);

    res.render("partners.ejs",{
        data:(datadb)
    });
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
    const message=req.body.message;
    const email=req.body.email;
    const user=new User({ 
        name,
        email, 
        message
    })
    await user.save();
    console.log(user);
    res.render("contact.ejs",{
        alert:true
    });
})
// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
