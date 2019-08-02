const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;
//Formatting data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Customer Data
let tables = [
    {
    customerName:"Jimmy",
    phoneNumber:"289-476-4839",
    customerEmail:"jimmy@gmail.com",
    customerID:"1"
    },
    {
    customerName:"Stone",
    phoneNumber:"213-485-9999",
    customerEmail:"stone@gmail.com",
    customerID:"2"
    },
    {
    customerName:"Flynt",
    phoneNumber:"215-405-4759",
    customerEmail:"flynt@gmail.com",
    customerID:"3"
    },
    {
    customerName:"Marcia",
    phoneNumber:"315-667-4659",
    customerEmail:"marcia@gmail.com",
    customerID:"4"
    }

]
let reserve = []

let clear = []

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/api/tables", (req, res) => {
    
     res.json(tables)
})

app.get("/api/reserve", (req, res) => {
    res.json(reserve)
})



app.post("/api/clear", (req,res) => {
    tables = clear;
    reserve = clear;
    res.json(clear)
})

app.post("/api/tables", (req, res) => {
    const getTable = req.body
    console.log(getTable)
   
        
        if(tables.length === 5) {
            console.log("pushed to waitlist")
            reserve.push(getTable)
        } else {
            tables.push(getTable)
        
    }
    
   
})  
app.listen(PORT, ()=> {
   console.log(PORT)
})