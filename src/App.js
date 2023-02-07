import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Traits from "./components/Traits/Traits";
import Process from "./components/Process/Process";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <Skills />
      <Traits />
      <Process />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
