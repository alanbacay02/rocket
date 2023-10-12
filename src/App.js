import Footer from './components/Footer';
import Hero from './components/Hero'
import Navbar from "./components/Navbar";
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
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
    <Reviews />
    <Footer />
  </div>
  );
}

export default App;
