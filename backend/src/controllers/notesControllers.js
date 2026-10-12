const getAllNotes = (req, res) => {
  res.status(200).json({ message: "you fetched the notes!" });
};

const postNote = (req, res) => {
  res.status(201).json({ message: "you posted the notes!" });
};

const updateNote = (req, res) => {
  res.status(200).json({ message: "you updated the note of id: " });
};

const deleteNote = (req, res) => {
  res.status(200).json({ message: "you deleted the note of id: "});
};

export { getAllNotes, postNote, updateNote, deleteNote };
