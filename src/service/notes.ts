import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import NoteRepo from "../repositories/NoteRepo";

export const createNote = (req: Request, res: Response) => {
  try {
    const note = NoteRepo.createNote({ ...req.body, id: uuidv4() });
    res.send(note);
  } catch (e) {
    res.status(500).json(e);
  }
};
export const getNotes = (req: Request, res: Response) => {
  try {
    const notes = NoteRepo.getNotes();
    if (notes) {
      res.send(notes);
    } else {
      res.status(400).send("No data was found.");
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getNote = (req: Request, res: Response) => {
  try {
    const note = NoteRepo.getNote(parseInt(req.params.id));
    if (note) {
      res.send(note);
    } else {
      res.status(400).send(`Note with id = ${req.params.id} doesn't exits`);
    }
  } catch (e: any) {
    res.status(500).json(e);
  }
};

export const deleteNote = (req: Request, res: Response) => {
  try {
    const note = NoteRepo.deleteNote(parseInt(req.params.id));
    if (note) {
      res.send(note);
    } else {
      res.status(400).send(`Note with id = ${req.params.id} doesn't exits`);
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateNote = (req: Request, res: Response) => {
  try {
    const note = NoteRepo.updateNote(req.body, parseInt(req.params.id));
    if (note) {
      res.send(note);
    } else {
      res.status(400).send(`Note with id = ${req.params.id} doesn't exits`);
    }
  } catch (e) {
    res.status(500).json(e);
  }
};
