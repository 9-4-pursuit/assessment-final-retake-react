import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Berries from "./components/berries/Berries";
import Pokemon from "./components/pokemon/Pokemon";
import Locations from "./components/locations/Locations";

function App() {


  return (
    <div className="app">

      <NavBar/>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berries" element={<Berries />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
