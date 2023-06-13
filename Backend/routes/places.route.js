import express from "express";
import { getPlace, allplaces } from "../controllers/places.controller.js";
const router = express.Router();



//GET Hotels

router.get("/",getPlace)

// //GET ALL Hotels

 router.get("/all",allplaces)


export default router;
