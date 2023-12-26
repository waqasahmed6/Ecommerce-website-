import  "dotenv/config"
import  express  from "express";
import { connectDb } from "./db/config.js";
import initDb from "./db/init.js";
import allRoutes from "./routes/allroutes.js";
import sequelize from "./db/config.js";
import Session from "express-session";
import Sequelizestore from "connect-session-sequelize"
const envData = process.env

const app =express()
app.use(express.json())

const mySequelizeStore = Sequelizestore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});
app.use(
  Session({
    secret: "khgaiuksxbkaj",
    store: mySequelizeStore1,
    saveUninitialized:false,
    resave: true,
    proxy: false,
  })
);
mySequelizeStore1.sync();

connectDb()
initDb()
.then(()=>{
    console.log(" db sync")
}).catch((err)=>{console.log("db syn error "+ err)})
app.use("/",allRoutes)


app.listen(envData.PORT,(err)=>{
    if(!err){
        console.log(`server is listening on http://localhost:${envData.PORT}`)
    }
    else{
        console.log(err+" server error")
    }
})
