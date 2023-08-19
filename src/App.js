import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Main/Home";
import Navbar from "./Layout/Header/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./Layout/Footer/Footer";
AOS.init({
  duration: 800,
});
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
