import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
<<<<<<< HEAD
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
=======
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
app.use(express.static("public"))
app.use(cookieParser())


<<<<<<< HEAD
//routes import
import userRouter from './routes/user.routes.js'


//routes declaration

app.use("/api/v1/users", userRouter)


// http://localhost:8000/api/v1/users/register
=======
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6

export { app }