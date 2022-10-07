// push git hub not err


const express = require('express');
const path = require('path')
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

// steps install to connecting html pages

//npm i express mysql dotenv hbs
// npn init -y
// npm i bcryptjs
//  npm i cookie-parser jsonwebtoken

const app = express();

const db = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"password",
    database:"employee",
});

const publicDirectory = path.join(__dirname, './public') // any css forn any front end we this method //__Dirname it is access curent directory
app.use(express.static(publicDirectory));

// parse url encoded bodies (as sent by html forms)
app.use(express.urlencoded ({ extended: false}));

// pasrse json bodies (as sent bt api clients)
app.use(express.json());


app.set("VIEW  ENGINE", "HPS");

db.connect( (error) =>{
    if(error) {
    console.log(error)
 } else{
    console.log("mysql conncted")
 }
})
// define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen(5000, () =>{
    console.log("server started on port 5000")
})
