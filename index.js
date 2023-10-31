const express=require("express");

const mongoose=require("mongoose");
const connection=require("./connections")

const app=express();

const{restricttologged}=require("./middleware/auth")
connection("mongodb://127.0.0.1:27017/demodb").then(()=>{console.log("mongo connected..")});
const port=2001

app.use(express.urlencoded({extended : false}));
app.use(express.json());

const userouter=require("./routes/routes");
const signuproute=require("./routes/login");

app.use("/",userouter);
//app.use("/user",signuproute);

app.listen(port,()=>{console.log("server started")
}
)