import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import hotelsRoute from "./routes/hotels.route.js";
import placesRoute from "./routes/places.route.js";
import aboutRoute from "./routes/about.route.js";
import cookieParser from "cookie-parser";
//import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/post", postRoute);
app.use("/hotels",hotelsRoute);
app.use("/places",placesRoute);
app.use("/about",aboutRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
    
  } catch (error) {
    console.log(error);
  }
};

//app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const port = 5000;
    app.listen(port, async() => {
    await connect();
    console.log(`Backend server is running!  ${port}...`);
});
