import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";

//Components
import LandingPage from "./components/landingpage/LandingPage";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import ActivityForm from "./components/activityform/ActivityForm";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" ? <Nav /> : ""}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activity" element={<ActivityForm />} />
      </Routes>
    </>
  );
};

export default App;
