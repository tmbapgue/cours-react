import React from "react";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
     <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<Home />}/>
          <Route exact  path="/About" element={<About />}/>
          <Route  path ="*" element={<NotFound />}/>
        </Routes>
     </BrowserRouter>
  );
};

export default App;