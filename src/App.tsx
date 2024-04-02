import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSnapshot } from "valtio";
// import state from "./store";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Info from "./components/Info";
import Contact from "./pages/Contact";

function App(): JSX.Element {
  // const snap = useSnapshot(state);
  return (
    <>
    
      <header></header>

      <main>
        <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
  
        </BrowserRouter>
      </main>

      <footer></footer>
        <div className="content content--canvas"></div>
    </>
  );
}

export default App;
