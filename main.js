import express from "express"
const app=express()
import bodyParser from "body-parser";
import {engine} from "express-handlebars"
import path from "path"
import { dirname } from "path";
import { fileURLToPath } from "url";
import router from "./router.js";
const __dirname=dirname(fileURLToPath(import.meta.url))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","hbs")
app.engine("hbs",engine({extname:"hbs",defaultLayout:"layout",layoutsDir:path.join(__dirname,"views/layout")}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/",router)
app.listen(1001)
