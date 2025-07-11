import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Product from "./pages/Product";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
