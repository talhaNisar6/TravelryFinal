import express from "express";
import { aboutPage } from "../controllers/about.controller.js";
const router = express.Router();



//About PAGE

router.get("/",aboutPage)

export default router;
