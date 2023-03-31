import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
// import NavBar from "./Components/NavBar";
import Pokemon from "./Components/Pokemon";
import Berries from "./Components/Berries";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <Router>
      <div className="container">
        <h1></h1>
        {/* <NavBar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon/>} /> 
            <Route path="/berries" element={<Berries/>} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </div>

      </Router>

    </div>
  );
}
export default App;