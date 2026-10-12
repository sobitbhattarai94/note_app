import express from "express";
import { getAllNotes, postNote, updateNote, deleteNote } from "../controllers/notesControllers.js";
const router = express.Router();

router.get("/", getAllNotes);
router.post("/", postNote);
router.put("/:id", updateNote);
router.delete("/:id",deleteNote );

export default router;
