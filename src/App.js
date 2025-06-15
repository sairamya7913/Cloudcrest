import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Service1 from "./components/services/Service1";
import Service2 from "./components/services/Service2";
import Service3 from "./components/services/Service3";
import Service4 from "./components/services/Service4";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Home with section routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Home />} />

          {/* Service pages */}
          <Route path="/service1" element={<Service1 />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service3" element={<Service3 />} />
          <Route path="/service4" element={<Service4 />} />
        </Routes>

        <ToastContainer position="top-right" autoClose={3000} />
      </main>
    </Router>
  );
};

export default App;
