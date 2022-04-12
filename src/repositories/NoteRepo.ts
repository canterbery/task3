import initialState, { Note } from "../initialState";

class NoteRepo {
  getNote(id: number) {
    return initialState.find((elem) => elem.id === id);
  }

  getNotes() {
    return initialState;
  }
  createNote(note: Note) {
    initialState.push(note);
    return initialState.find((elem) => elem.id === note.id);
  }
  deleteNote(id: number) {
    const note = initialState.find((elem) => elem.id === id);
    if (note) {
      const index = initialState.indexOf(note);
      return initialState.splice(index, 1);
    }
  }
  updateNote(upd: Partial<Note>, id: number) {
    const note = initialState.find((elem) => elem.id === id);
    const { name, category, dates, content, isArchived } = upd;

    if (note) {
      if (name) {
        note.name = name;
      }
      if (category) {
        note.category = category;
      }
      if (dates) {
        note.dates = dates;
      }

      if (content) {
        note.content = content;
      }

      if (isArchived) {
        note.isArchived = isArchived;
      }

      return note;
    }
  }
}

export default new NoteRepo();
