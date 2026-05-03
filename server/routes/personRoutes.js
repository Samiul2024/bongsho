import express from "express";

import {
  createPerson,
  getPeople,
  updatePerson,
  deletePerson,
} from "../controllers/personController.js";

const router = express.Router();

router.post("/", createPerson);

router.get("/", getPeople);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

export default router;