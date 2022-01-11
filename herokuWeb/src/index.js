const express= require ('express');
const app= express();
const port= 8000;
const path= require ('path');
const hbs=  require ('hbs');

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// To set the view engines

app.set('view engine',"hbs");
app.set('views',templatePath); //To change the foldername from views to templates

hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

    // app.set('view engine',"hbs");
    app.get("/",(req,res)=>{
        res.render("index");
    });
   
    app.get("/About",(req,res)=>{
        res.render("About");
    });
    app.get("/Connect",(req,res)=>{
        res.render("Connect");
    });
    app.get("/Product",(req,res)=>{
        res.render("Product");
    });
    app.get("/Contact",(req,res)=>{
        res.render("Contact");
    });
    app.get("*",(req,res)=>{
        res.render("404");
    });
    

app.listen(port,"",()=>{
    console.log ("listening the port number"+ port);


});