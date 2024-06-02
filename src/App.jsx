import "bootstrap/dist/css/bootstrap.css";
import "./common.css";
import JobsLanding from "./pages/JobsLanding";
import { Route, Routes } from "react-router-dom";
import PropertyLanding from "./pages/propertiesLanding";
import JobListingPage from "./pages/JobsPage";
import PropertiesPage from "./pages/PropertiesPage";

function App() {
  return (
    <div className="d-flex flex-column gap-4">
      <Routes>
        <Route path="/" element={<JobsLanding />} />
        <Route path="/plan" element={<PropertyLanding />} />
        <Route path="/jlist" element={<JobListingPage />} />
        <Route path="/props" element={<PropertiesPage />} />
      </Routes>
    </div>
  );
}

export default App;
