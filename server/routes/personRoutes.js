import express from "express";

import {
    createPerson,
    getPeople,
} from "../controllers/personController.js";

const router = express.Router();

router.post("/", createPerson);

router.get("/", getPeople);

export default router;