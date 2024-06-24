import express from "express";
import { getAllJobs } from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js"
import { postJob } from "../controllers/jobController.js";
import { getMyJobs } from "../controllers/jobController.js";
import { updateJob } from "../controllers/jobController.js";
import { jobDelete } from "../controllers/jobController.js";
import { getSingleJob } from "../controllers/jobController.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.get("/:id", isAuthorized, getSingleJob);
router.post("/post", isAuthorized, postJob);
router.get("/getMyJobs", isAuthorized, getMyJobs);
router.put("/update/:id", isAuthorized, updateJob);
router.delete("/delete/:id", isAuthorized, jobDelete);

export default router;