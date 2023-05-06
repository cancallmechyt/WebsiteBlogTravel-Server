import express from "express";
import cors from "cors"
import postRoutes from "./routes/posts.js"
import authRouters from "./routes/auth.js"
import userRouters from "./routes/user.js"
import cookieParser from "cookie-parser";
import multer from "multer";


const app = express()

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", function(req, res) {
  const text = req.body.text;
  res.status(200).send(text);
});


app.use("/auth", authRouters)
app.use("/users", userRouters)
app.use("/posts", postRoutes)


app.listen(8800, () => {
  console.log("Connected!")
})