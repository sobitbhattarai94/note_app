import Note from "../models/Note.js";
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "error getting all notes:" });
    console.error("error getting all notes: ", error);
  }
};

const postNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title: title, content: content });
    await newNote.save();
    res
      .status(201)
      .json({ message: "note created successfully!!", note: newNote });
  } catch (error) {
    res.status(500).json({ message: "error posting notes" });
    console.error("error posting note: ", error);
  }
};

const updateNote = async (req, res) => {
  try {
    //bullshit logic 😂😂
    // const id = req.params._id;
    // const { title, content } = req.body;
    // let tempNote = Note.find(id);
    // tempNote = Note({ title, content });
    // await tempNote.save();
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }, // by default the findByAndUpdate method returns old data before update, but doing this it will return the updated value after the line runs
    );
    if (!updatedNote)
      return res.status(404).json({ message: "note not found!!" });

    res.status(200).json({ message: "note updated successfully", updatedNote});
  } catch (error) {
    console.error("error updating the note: ", error);
    res.status(500).json({ message: "error updating the note" });
  }
};

const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error deleting the note" });
    console.error("error deleting the note: ", error);
  }
};

export { getAllNotes, postNote, updateNote, deleteNote };
