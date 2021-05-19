require('dotenv').config();
const mysql = require('mysql2');
const fs = require('fs');


const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err) =>{
    if(err) {
        console.log(err);           
        fs.appendFileSync('./error.log','\r\n Unable to connect database!',(err)=>{
            //if(err) console.log(err);
            console.log(err)
        });
    } else {
        console.log('connected');
    }
});

