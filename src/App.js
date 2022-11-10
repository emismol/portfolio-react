import { useState } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./style.css";

function App() {
  const [page, setPage] = useState("About Me");
  return (
    <div>
      <Navigation onChange={setPage} currentPage={page} />
      {page === "About Me" && <AboutMe />}
      {page === "Portfolio" && <Portfolio />}
      {page === "Contact" && <Contact />}
      {page === "Resume" && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
