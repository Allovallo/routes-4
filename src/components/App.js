import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SharedLayout } from "./SharedLayout";
import { About } from "../pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
