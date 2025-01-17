import "./App.css";
import "./embla.css";
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
