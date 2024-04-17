import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";

function App(): JSX.Element {
  return (
    <>
      <main>
        <BrowserRouter>
          <header>
            <Header />
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>

      <div className="content--canvas"></div>
      <Analytics />
    </>
  );
}

export default App;
