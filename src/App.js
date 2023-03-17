
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from "./components/Skills/Skills"
import Projects from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
