import express from "express";
import dotenv from "dotenv";
// import multer from "multer"
import "colors"
import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js"
import {connectionDB} from "./config/db.js";
import errorHandeler from "./middleware/errorHandeler.js";
import {loginUser, registerUser} from "./controllers/userControllers.js";
import cookieParser from "cookie-parser"
import {loginStudent, registerStudent} from "./controllers/studentControllers.js";
import cors from "cors"
import path  from "path";

//init express
const app = express();

//Dirname resolved
const __dirname = path.resolve()

//init env variable
dotenv.config();

const PORT = process.env.PORT || 8000;


//Multer storage 
// const storage = multer.diskStorage({
//       destination : (req, file, cb) => {
//             cb(null, "./assets/upload")
//       },
//       filename : (req, file, cb) => {
//             const file_name = Date.now() + file.originalname;
//             cb(null, file_name)
//       }
// })
// const multer_upload = multer({storage : storage}).single('photo')

//Connection database
connectionDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser())
app.use(cors())

//router
app.use("/student", studentRouter)
app.use("/user", userRouter)
app.post("/student/register_student", registerStudent)
app.post("/student/login_student", loginStudent)
app.post("/user/register", registerUser)
app.post("/user/login", loginUser)
app.post("/user/no-login", loginUser)

//Use build folder 
app.use(express.static("./Instagram/build"))
app.get( "*", (req, res ) => {
      res.sendFile(path.join(__dirname,"./Instagram/build/index.html"))
})

//Express error handelaer
app.use(errorHandeler)

app.listen(PORT, () => {
      console.log(` Server is runing on port ${PORT}`.america.bgWhite);
})

