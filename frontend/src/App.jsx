import {Routes, Route} from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailsPage from "./pages/NoteDetailsPage"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/createnote" element={<CreatePage />}/>
        <Route path="/note/:id" element={<NoteDetailsPage />}/>
      </Routes>
    </div>
  )
}

export default App