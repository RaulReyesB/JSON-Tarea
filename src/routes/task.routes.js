import { Router } from "express";
import {
  getAll,
  getByCategory,
  getByPriority,
  getByDueDate,
  getOne,
  insertOne,
  updateOne,
  deleteOne,
} from "../controllers/taskController.js";

const router = Router();

router.get("/", getAll);
router.get("/category/:category", getByCategory);
router.get("/priority/:priority", getByPriority);
router.get("/dueDate/:dueDate", getByDueDate);
router.get("/:taskId", getOne);
router.post("/", insertOne);
router.put("/:taskId", updateOne);
router.delete("/:taskId", deleteOne);

export default router;
