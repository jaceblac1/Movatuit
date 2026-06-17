import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Service from './components/Service/Service';
import Serve from './components/Serve/Serve';
import Process from './components/Process/Process';
import Why from './components/Why/Why';
import Testimonial from './components/Testimonials/Testimonials';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import Divider from './components/Divider/Divider';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Serve />
      <Process />
      <Why />
      <Testimonial />
      <Cta />
      <Divider />
      <Footer />
    </>

  );
}

export default App
