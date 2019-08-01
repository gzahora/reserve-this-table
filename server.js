const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;
//Formatting data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Customer Data
const tables = [
    {
    customerName:"Jimmy",
    phoneNumber:"1054839",
    customerEmail:"jimmy@gmail.com",
    customerID:"1"
    },
    {
    customerName:"Stone",
    phoneNumber:"2134859",
    customerEmail:"stone@gmail.com",
    customerID:"2"
    },
    {
    customerName:"Flynt",
    phoneNumber:"4054759",
    customerEmail:"flynt@gmail.com",
    customerID:"3"
    },
    {
    customerName:"Marcia",
    phoneNumber:"3154659",
    customerEmail:"marcia@gmail.com",
    customerID:"4"
    }

]

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
    
    return res.json(tables)
})
app.listen(PORT, ()=> {
   console.log(PORT)
})