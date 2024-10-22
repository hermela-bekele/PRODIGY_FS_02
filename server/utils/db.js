import mysql, { createConnection } from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_management"
})

con.connect(function(err){
    if(err) {
        console.log("connection error")
    } else {
        console.log("connected sucessfully")
    }
})

export default con;