import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Boost from "./pages/Boost";
import Invite from "./pages/Invite";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/boost" element={<Boost />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>

      <Navigation />
    </>
  );
}

export default App;
