import { ChartBarLabel } from "@/components/ChartBarLabel";
import KPICard from "../components/KPICard";
import AddtionsCard from "@/components/AdditionsCard";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-1">System Overview</h1>
        <p>
          A complete overview of all IT assets for the Judicial Service of
          Ghana.
        </p>
      </div>

      <div className="flex items-center gap-15 mb-6">
        <KPICard title="Total Devices" quantity={2600} />
        <KPICard title="Total Courts" quantity={1205} />
        <KPICard title="Total Regions" quantity={16} />
      </div>

      <ChartBarLabel />

      <div className="mt-9">
        <h3 className="text-xl mb-2 font-semibold">
          Recent Additions of Devices (Latest 5)
        </h3>
        <div className="flex flex-col gap-3">
          <AddtionsCard />
          <AddtionsCard />
          <AddtionsCard />
          <AddtionsCard />
          <AddtionsCard />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
