import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="bg-c-blue h-screen flex flex-col text-c-white">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
