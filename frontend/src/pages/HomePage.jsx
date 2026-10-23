import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/notes");
        // const data = await response.json(); // skip this if using axios, only for fetch
        console.log(response.data);
        setNotes(response.data);
      } catch (error) {
        console.error("error fetching notes: ", error);
      } finally{
        setIsLoading(false);
      }
    };
    getNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="grid max-w-6xl mx-auto mt-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          notes.map((note) => (
            <Card key={note._id} note={note} />
          ))
        )}
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
