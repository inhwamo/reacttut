import Navbar from "./Navbar"; //don't need .js
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
