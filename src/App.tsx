import Navbar from "./components/Navbar";
import Data from "./pages/Data";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
