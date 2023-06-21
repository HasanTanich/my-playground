import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Movies from "./components/Movies";
import Header from "./components/Header";
import { Playfield } from "./components/Playfield";
import Homepage from "./components/Homepage";
import TailWind from "./components/TailWind";
import ProfilePage from "./components/ProfilePage";

function App() {
  const location = useLocation();
  const isTailwindRoute = location.pathname === "/tailwind";

  return (
    <div className="App">
      {!isTailwindRoute && <Header />}
      {isTailwindRoute ? (
        <TailWind />
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/playfield" element={<Playfield />} />
          <Route path="/tailwind" element={<TailWind />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
