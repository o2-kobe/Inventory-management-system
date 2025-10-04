import KPICard from "../components/KPICard";

const Dashboard = () => {
  return (
    <div className="flex items-center gap-15">
      <KPICard title="Total Devices" quantity={129} />
      <KPICard title="Total Courts" quantity={1205} />
      <KPICard title="Total Regions" quantity={16} />
    </div>
  );
};
export default Dashboard;
