import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// import JobsLanding from "./pages/JobsLanding";
import { Route, Routes } from "react-router-dom";
import PropertyLanding from "./pages/propertiesLanding";
import JobListingPage from "./pages/JobsPage";

function App() {
  return (
    <div className="d-flex flex-column gap-4">
      <Routes>
        {/* <Route path="/" element={<JobsLanding />} /> */}
        <Route path="/prop" element={<PropertyLanding />} />
        <Route path="/" element={<JobListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
