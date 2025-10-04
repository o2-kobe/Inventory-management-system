interface KPICardProps {
  title: string;
  quantity: number;
}

// KPI represents Key Performance indicators
const KPICard = ({ title, quantity }: KPICardProps) => {
  return (
    <div className="p-8 border border-gray-300 rounded-md shadow-md  w-1/4 text-center">
      <h5 className="font-semibold">{title}</h5>
      <p className="font-semibold text-3xl">{quantity}</p>
    </div>
  );
};
export default KPICard;
