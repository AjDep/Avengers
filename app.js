const express =require('express');
const app =express(); //created an express application

// In node when we are writing a request we had to write two requests but in this we only because we are using express.js we only have to write one line 
// that is res.send("****your text****");
// for example we had to write 
//res.write(" The text");
//res.end();

//Traditional Method
// app.listen(3000,function(){
//     console.log("Listing on this port")
// });
//New Method
app.listen(3000, ()=>{
    console.log("Listing on this port 3000")
});
let avengerArray=[
    {id:1,name:"Captain America"},
    {id:2,name:"Thor"},
    {id:3,name:"Black Widow"}
];
//Get All
app.get('/',(req,res)=>{
    let avg=['Captain America','Iron man','Black Panther'];
    res.send(avg);

});
//Get Para
app.get('/para',(req,res)=>{
    let avenger ={name:'Anjana Dep' ,id:'20221307'};
    res.send(avenger);
});

app.get('/marvel/:avengerId',(req,res)=>{
    let OptinalParam= req.query.filterby;
    res.send("you have requested for avenger id:"+req.params.avengerId+" and "+OptinalParam);
});

// GET with Params
app.get("/avengers/:avengerId",(req,res)=>{
    let avenger=avengerArray.find(a=>a,id === parseInt(req.params.avengerId));
if(!avengerArray){
    return res.status(404).send("The given Id is not in our System");
}
res.send(avenger);
});