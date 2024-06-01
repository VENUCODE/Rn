import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import JobsLanding from "./pages/JobsLanding";
import { Route, Routes } from "react-router-dom";
import PropertyLanding from "./pages/propertiesLanding";

function App() {
  return (
    <div className="d-flex flex-column gap-4">
      <Routes>
        <Route path="/" element={<JobsLanding />} />
        <Route path="/prop" element={<PropertyLanding />} />
      </Routes>
    </div>
  );
}

export default App;
