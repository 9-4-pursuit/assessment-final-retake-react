import "./App.css";
import Nav from "./components/Nav";
import Container from "./Container";

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Container />
      </main>
    </div>
  );
}

export default App;
