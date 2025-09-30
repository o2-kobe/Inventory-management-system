import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";

import Settings from "./pages/Settings";
import Regions from "./pages/Regions";
import Region from "./components/Region";
import CourtType from "./components/CourtType";
import DevicePage from "./components/DevicePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppLayout />}>
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/regions" element={<Regions />} />
            <Route path="/app/regions/:regionSlug" element={<Region />} />
            <Route
              path="/app/regions/:regionSlug/court-type/:courtTypeId"
              element={<CourtType />}
            />
            <Route
              path="/app/regions/:regionSlug/court-type/:courtTypeId/court/:courtId/devices"
              element={<DevicePage />}
            />

            <Route path="/app/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
