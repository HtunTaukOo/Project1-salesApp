import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SalesJournal from "./pages/SalesJournal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/journal" element={<SalesJournal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

