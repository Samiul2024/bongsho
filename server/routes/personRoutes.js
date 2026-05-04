import express from "express";

import {
  createPerson,
  getPeople,
  updatePerson,
  deletePerson,
} from "../controllers/personController.js";

import {
  protect,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();



// PUBLIC
router.get("/", getPeople);



// ADMIN + OWNER
router.post(
  "/",
  protect,
  authorizeRoles(
    "admin",
    "owner"
  ),
  createPerson
);

router.put(
  "/:id",
  protect,
  authorizeRoles(
    "admin",
    "owner"
  ),
  updatePerson
);

router.delete(
  "/:id",
  protect,
  authorizeRoles(
    "admin",
    "owner"
  ),
  deletePerson
);

export default router;