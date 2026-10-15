import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
const HomePage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/notes");
        // const data = await response.json(); // skip this if using axios, only for fetch
        console.log(response.data);
        setNotes(response.data);
      } catch (error) {
        console.error("error fetching notes: ", error);
      }
    };
    getNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex justify-between items-center gap-3 ">
        {notes.map((note) => (
          <div className="border m-3 p-4 w-fit rounded-sm" key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// import Navbar from "../components/Navbar";
// import Card from "../components/Card";
// // import notes from "../data/mockdata.js";
// import { useEffect, useState } from "react";
// const HomePage = () => {
//   const [notes, setNotes] = useState([]);
//   const getNotes = async () => {
//     try {
//       const response = await fetch("/api/notes");
//       if (!response.ok) throw new Error("failed to fetch lalaaaa!");
//       const result = await response.json();
//       setNotes(result);
//       console.log(result);
//     } catch (error) {
//       console.error("error fetching the notes ", error);
//     }
//   };
//   useEffect(() => {
//     getNotes();
//   }, []);

//   return (
//     <div data-theme="sunset" className="px-8">
//       <Navbar />
//       <div className="flex justify-between gap-3 flex-wrap">
//         {notes.map((note) => (
//           <Card
//             key={note._id}
//             title={note.title}
//             desc={note.desc}
//             id={note._id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
