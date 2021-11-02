import Intro from "./components/intro/Intro";
import About from "./components/about/about";
import Card from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import "./Main.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Card />
      <Contact />
    </div>
  );
}

export default App;
