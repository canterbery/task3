import express from "express";
import validate from "../service/validateRequest";
import {
  createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../service/notes";
import createNoteSchema from "../service/createNote.schema";
import updateNoteSchema from "../service/updateNote.schema";

const router = express.Router();

router.get("/", getNotes);

router.post("/", validate(createNoteSchema), createNote);

router.get("/:id", getNote);

router.delete("/:id", deleteNote);

router.patch("/:id", validate(updateNoteSchema), updateNote);

export default router;
