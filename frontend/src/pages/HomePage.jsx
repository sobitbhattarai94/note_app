import Navbar from "../components/Navbar";
import Card from "../components/Card";
import notes from "../data/mockdata.js"
const HomePage = () => {
 
  return (
    <div data-theme="sunset" className="px-8">
      <Navbar />
      <div className="flex justify-between gap-3 flex-wrap">
        {notes.map((note) => (
          <Card key={note.id} title={note.title} desc={note.desc} id={note.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
