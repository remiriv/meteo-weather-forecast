import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ForecastMap } from "./map/ForecastMap";

export default App;

function App() {
  return (
    <Routes>
      <Route path="forecast" element={<ForecastMap />} />
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}
