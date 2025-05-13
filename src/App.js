import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
