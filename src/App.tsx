import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";

import Settings from "./pages/Settings";
import Regions from "./pages/Regions";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppLayout />}>
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/regions" element={<Regions />} />

            <Route path="/app/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
