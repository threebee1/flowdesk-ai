type DashboardCardProps = {
  title: string;
  description: string;
};

export default function DashboardCard({
  title,
  description,
}: DashboardCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {description}
      </p>
    </div>
  );
}