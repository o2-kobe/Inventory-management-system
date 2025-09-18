import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Provision from "./pages/Provision";
import CreateProvision from "./pages/CreateProvision";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppLayout />}>
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/inventory" element={<Inventory />} />
            <Route path="/app/provision" element={<Provision />}>
              <Route
                path="/app/provision/create-provision"
                element={<CreateProvision />}
              />
            </Route>
            <Route path="/app/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
