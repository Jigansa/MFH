
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import env from "dotenv";
const app = express(); 
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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
const PeoplesDbSchema= new mongoose.Schema({
    _id:String,
    SN:Number,
    Name:String,
    Area:String,
    Focal_Point:String,
    Contact_Number:String
},{strict:'false'});
const ExpertDbSchema= new mongoose.Schema({
    _id:String,
    SL:Number,
    Name:String,
    Specialization:String,
},{strict:'false'});
const User=mongoose.model("Review",UserSchema);
const Data=mongoose.model("exceldatas",PartnerDbSchema);
const People=mongoose.model("peoples",PeoplesDbSchema);
const Expert=mongoose.model("experts",ExpertDbSchema);
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
  
// Set view engine to EJS
app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
// Routes
app.get('/', (req, res) => {
    res.render(__dirname+"/views/index.ejs");
});
app.get('/annual', (req, res) => {
    res.render("annual.ejs");
});
app.get('/media-gallery', (req, res) => {
    res.render("media-gallery.ejs");
});
app.get('/punjab', (req, res) => {
    res.render("p1punjab.ejs");
});
app.get('/uttarkashi', (req, res) => {
    res.render("p2uttarkashi.ejs");
});
app.get('/garhwal', (req, res) => {
    res.render("p3garhwal.ejs");
});
app.get('/dharali', (req, res) => {
    res.render("dharali.ejs");
});
app.get('/kupra-village', (req, res) => {
    res.render("p4kupra.ejs");
});
app.get('/drvt', (req, res) => {
    res.render("drvt.ejs");
});
app.get('/outreach', (req, res) => {
    res.render("outreach.ejs");
});
app.get('/contact', (req, res) => {
    res.render("contact.ejs",{
        alert:false
    });
});

app.get('/overview', (req, res) => {
    res.render("overview.ejs");
});

app.get('/mc', (req, res) => {
    res.render("mc.ejs"); 
});

app.get('/mrn', (req, res) => {
    res.render("mrn.ejs");
});
app.get('/board-members', (req, res) => {
    res.render("board_members.ejs");
});

app.get('/vision', (req, res) => {
    res.render("vision.ejs");
});
app.get('/mc', (req, res) => {
    res.render("mc.ejs");
});
app.get('/mrn', (req, res) => {
    res.render("mrn.ejs");
});
app.get('/others', async (req, res) => {
    let datadb= await (Data.find({})); 

    res.render("partners.ejs",{
        data:(datadb) 
    });
});
app.get('/focus2', (req, res) => {
    res.render("focus2.ejs");
}); 
app.get('/focus2/drr', (req, res) => {
    res.render("drr.ejs");
});
app.get('/focus2/building', (req, res) => {
    res.render("building.ejs");
});
app.get('/focus2/school', (req, res) => {
    res.render("school.ejs");
});
app.get('/focus2/capacity', (req, res) => {
    res.render("capacity.ejs");
});
app.get('/focus2/emer', (req, res) => {
    res.render("emer.ejs");
});
app.get('/focus2/long-term', (req, res) => {
    res.render("long-term.ejs");
});
app.get('/focus2/early', (req, res) => {
    res.render("early.ejs");
});
app.get('/focus3', (req, res) => {
    res.render("focus3.ejs");
});
app.get('/action', (req, res) => {
    res.render("action.ejs");
});
app.get('/action/mrm', (req, res) => {
    res.render("mrm.ejs");
});
app.get('/action/gupt', (req, res) => {
    res.render("gupt.ejs");
});
app.get('/action/child', (req, res) => {
    res.render("child.ejs");
});
app.get('/action/action8', (req, res) => {
    res.render("action8.ejs");
});
app.get('/action/org_dev', (req, res) => {
    res.render("org_dev.ejs");
});
app.get('/action/humanaid', (req, res) => {
    res.render("humanaid.ejs");
});
app.get('/action/action6', (req, res) => {
    res.render("action6.ejs");
});
app.get('/action/action7', (req, res) => {
    res.render("action7.ejs"); 
});
app.get('/action/gendereq', (req, res) => {
    res.render("gendereq.ejs");
});
app.get('/focus3/skilling', (req, res) => {
    res.render("skilling.ejs");
});
app.get('/focus3/resilienttech', (req, res) => {
    res.render("resilienttech.ejs");
});
app.get('/focus3/enterprise', (req, res) => {
    res.render("enterprise.ejs");
});
app.get('/focus3/innovation', (req, res) => {
    res.render("innovation.ejs");
});
app.get('/focus3/tourism', (req, res) => {
    res.render("tourism.ejs");
});
app.get('/focus2/community', (req, res) => {
    res.render("community.ejs");
});
app.get('/focus4', (req, res) => {
    res.render("focus4.ejs");
});
app.get('/focus4/resource_4', (req, res) => {
    res.render("resource_4.ejs");
});
app.get('/focus4/women', (req, res) => {
    res.render("women.ejs");
});
app.get('/focus4/local_leader', (req, res) => {
    res.render("local_leader.ejs");
});
app.get('/focus4/include', (req, res) => {
    res.render("include.ejs");
});
app.get('/focus4/com_forest', (req, res) => {
    res.render("com_forest.ejs");
});
app.get('/focus4/cap_b', (req, res) => {
    res.render("cap_b.ejs");
});
app.get('/focus5', (req, res) => {
    res.render("focus5.ejs");
});
app.get('/focus5/waste_man', (req, res) => {
    res.render("waste_man.ejs");
});
app.get('/focus5/tourism', (req, res) => {
    res.render("tourism.ejs");
});
app.get('/focus5/part_ner', (req, res) => {
    res.render("part_ner.ejs");
});
app.get('/focus5/adap', (req, res) => {
    res.render("adap.ejs");
});
app.get('/focus5/com_eng', (req, res) => {
    res.render("com_eng.ejs");
});
app.get('/focus5/com_forest', (req, res) => {
    res.render("com_forest.ejs");
});
app.get('/focus5/climate_justice', (req, res) => {
    res.render("climate_justice.ejs");
});
app.get('/focus6', (req, res) => {
    res.render("focus6.ejs");
});
app.get('/focus6/shc', (req, res) => {
    res.render("shc.ejs");
});
app.get('/focus6/mw', (req, res) => {
    res.render("mw.ejs");
});
app.get('/focus7', (req, res) => {
    res.render("focus7.ejs");
});
app.get('/focus8', (req, res) => {
    res.render("focus8.ejs");
});
app.get('/focus5/adap', (req, res) => {
    res.render("adap.ejs");
});
app.get('/focus5/climate_justice', (req, res) => {
    res.render("climate_justice.ejs");
});
app.get('/focus5/com_eng', (req, res) => {
    res.render("com_eng.ejs");
});
app.get('/focus5/part_ner', (req, res) => {
    res.render("part_ner.ejs");
});
app.get('/focus5/waste_man', (req, res) => {
    res.render("waste_man.ejs");
});
app.get('/recovery', (req, res) => {
    res.render("recovery.ejs");
});
app.get('/waste-management', (req, res) => {
    res.render("waste-management.ejs");
});

app.get('/campaigns', (req, res) => {
    res.render("campaigns.ejs");
});
app.get('/research', (req, res) => {
    res.render("research.ejs");
});
app.get('/local', (req, res) => {
    res.render("local.ejs");
});
app.get('/focus1', (req, res) => {
    res.render("focus1.ejs");
});
app.get('/focus1/promo_live', (req, res) => {
    res.render("promo_live.ejs");
});
app.get('/focus1/enhance_community', (req, res) => {
    res.render("enhance_community.ejs");
});
app.get('/donate', (req, res) => {
    res.render("donate.ejs");
});
app.get('/focus1/farmers', (req, res) => {
    res.render("farmers.ejs");
});
app.get('/focus1/tech', (req, res) => {
    res.render("tech.ejs");
});
app.get('/focus1/govt', (req, res) => {
    res.render("govt.ejs");
});
app.get('/opportunities', (req, res) => {
    res.render("opportunities.ejs"); 
});
app.get('/board-members/jayant', (req, res) => {
    res.render("jjayant.ejs");
});
app.get('/mc/voluntary', async (req, res) => {
    let datadb= await (Data.find({}));  

    res.render("voluntary.ejs",{
        data:datadb
    });
});
app.get('/mc/people', async (req, res) => {
    let datadb= await (People.find({})); 

    res.render("people.ejs",{
        data:datadb 
    }); 
});
app.get('/mc/experts', async (req, res) => {
    let datadb= await (Expert.find({}));
    res.render("experts.ejs",{
        data:datadb
    });
});
app.get('/mc/institutions', (req, res) => {
    res.render("institutions.ejs");
}); 
app.get('/disaster-preparedness', (req, res) => {
    res.render("disaster.ejs");
});
app.get('/partnership', (req, res) => {
    res.render("partnership.ejs"); 
});
app.get('/principles',(req,res)=>{
    res.render("principles.ejs");
});
app.get('/volunteer', (req, res) => {
    res.render("volunteer.ejs"); 
});
app.get('/volunteer/v', (req, res) => {
    res.render("v.ejs");   
});

app.get('/become_member', (req, res) => {
    res.render("become_member.ejs"); 
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
});
// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
