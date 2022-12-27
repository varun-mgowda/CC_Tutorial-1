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
