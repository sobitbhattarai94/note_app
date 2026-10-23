import {Routes, Route} from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailsPage from "./pages/NoteDetailsPage"
const App = () => {
  return (
    <div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%, #000_60%, #00ff9d40_100%)]"></div> */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/createnote" element={<CreatePage />}/>
        <Route path="/note/:id" element={<NoteDetailsPage />}/>
      </Routes>
    </div>
  )
}

export default App