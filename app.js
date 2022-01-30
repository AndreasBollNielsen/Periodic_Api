const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//load json file
const fs = require('fs');
const jsonData = fs.readFileSync('./Data/PeriodicTableJSON.json');

//send data 
app.get('/repos', (req,res) =>{
    res.send(jsonData);
})



//output port listener
app.listen(port, () =>{console.log(`port is listening ${process}` )} );