import express from "express";
import { allHotels, getHotels } from "../controllers/hotels.controller.js";
const router = express.Router();



//GET Hotels

router.get("/",getHotels)

// //GET ALL Hotels

 router.get("/all",allHotels)


export default router;
