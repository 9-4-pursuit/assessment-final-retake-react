import "./App.css";
import NavBar from "./Components/NavBar";
import Container from "./Container";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <main>
        <Container/>
      </main>
    </div>
  );
}

export default App;
