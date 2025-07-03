import "./App.css";
import "./embla.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import About from "./components/about";
import Exp from "./components/exp";
import Footer from "./components/footer";
import Projek from "./components/projek";
import projek1 from "./assets/project-1.png";
import projek2 from "./assets/project-2.png";
import projek3 from "./assets/project-3.png";

const images = [projek1, projek2, projek3];

const carouselOptions = {
  loop: true,
  autoplay: true,
  speed: 1000,
};

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      easing: 'ease-in-out', // gaya transisi
      once: true, // animasi hanya sekali
      mirror: false
    });
  }, []);
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Projek />
      <Exp />
      <Footer />
    </>
  );
}
