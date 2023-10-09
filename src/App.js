import Footer from './components/Footer';
import Hero from './components/Hero'
import Navbar from "./components/Navbar";
import Pricing from './components/Pricing';
import Security from './components/Security';
import ValueProposition from './components/ValueProposition';


function App() {
  return (
  <div>
    <Navbar />
    <Hero />
    <ValueProposition />
    <Security />
    <Pricing />
    <Footer />
  </div>
  );
}

export default App;
