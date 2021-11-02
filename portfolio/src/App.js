import Intro from "./components/intro/Intro";
import About from "./components/about/about";
import Card from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import "./Main.css";
import { ThemeContext } from "./components/context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Card />
      <Contact />
    </div>
  );
};

export default App;
