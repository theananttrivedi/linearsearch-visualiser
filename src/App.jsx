import BarContainer from "./components/BarContainer";
import "./assets/Inter/fonts.css";
import LearnLinearSearch from "./components/LearnLinearSearch";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BarContainer />} />
          <Route path="learn" element={<LearnLinearSearch />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
