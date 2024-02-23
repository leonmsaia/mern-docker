// Assets Load
import './App.css';
import WebData from './data.json';

// Main Pages Components
import Home from './Home/Home'
import About from './About/About'
import Resume from './Resume/Resume'
import Portfolio from './Portfolio/Portfolio'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'

// Supplement Components
import Preloader from './Components/Preloader'
import Navbar from './Components/Navbar'

function App() {
  // console.log(WebData);
  return (
    <>
      <Preloader />
      <Navbar />
      <Home data={ WebData } />
      <About data={ WebData } />
      <Resume data={ WebData } />
      <Portfolio data={ WebData } />
      <Blog data={ WebData } />
      <Contact data={ WebData } />
    </>
  );
}

export default App;

