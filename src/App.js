import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Main/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import Detail from "./Component/Detail";
AOS.init({
  duration: 800,
});
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
