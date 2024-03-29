import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "./store";
import Home from "./pages/Home";
import Bio from "./components/Bio";

function App(): JSX.Element {
  // const snap = useSnapshot(state);
  return (
    <>
      <header></header>

      <main>
        <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bio" element={<Bio />} />
            </Routes>
  
        </BrowserRouter>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
