const express = require('express');
const fs = require('fs');
const port = 8000;
const app = express();

app.use(express.static('asset'));

app.get('/', function(req, res) {
    fs.readFile('./Major Project 1.html', function(err, data){
        if(err){
            console.log('Error', err);
            return;
        }
        return res.end(data);
    });
});

app.listen(port, err => {
    if(err){
        console.log('Error: ', err);
        return;
    }
    console.log('Server running successfully!!');
});
app.post("/api/userLogin", function(req,res){
   
//    userLogin.create({
//     username: req.body.username,
//     aadhaar: req.body.aadhaar,
//     voter_id: req.body.voter_id,
// }).catch(err=>{
//     console.log(err);
// });
userLogin.find({}).then(a => { 
    //create userlogin(s) db in database elections
       
       for (i = 0; i < a.length; i++){
             
        //    if(a[i].aadhaar==req.body.aadhaar && a[i].username==req.body.username && a[i].voter_id==req.body.voter_id){
            if(a[i].voter_id==req.body.voter_id &&  a[i].username==req.body.username  && a[i].aadhaar==req.body.aadhaar && a[i].wallet==req.body.wallet){
            console.log(a[i].aadhaar);
             res.send(true);
             return;
           }
         }
         res.send(false);
     }).catch(err=>{
        console.log(err);
     })
    
});

app.get("/api/userLogin", function(req,res){
   
   
    userLogin.find({}).then(a => { //create userlogin(s) db in database elections
           let final=[];
           for (i = 0; i < a.length; i++){
                 
            //    if(a[i].aadhaar==req.body.aadhaar && a[i].username==req.body.username && a[i].voter_id==req.body.voter_id){
                if(a[i].voter_id==req.body.voter_id &&  a[i].username==req.body.username ){
                    final.push({
                        aadhaar:a[i].aadhaar,
                        wallet: a[i].wallet,
                        phone:a[i].phone,
                    })
                console.log(a[i].aadhaar);
                 res.send(final);
                 return;
               }
             }
            
         }).catch(err=>{
            console.log(err);
         })
        
    });
    


