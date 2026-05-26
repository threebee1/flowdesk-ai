import Sidebar from "./components/sidebar";
import DashboardCard from "./components/DashboardCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <section className="flex-1 p-8">
        <Navbar />

        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome to FlowDesk AI
          </p>
        </div>

       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <DashboardCard
              title="Clients"
              description="Manage business clients"
            />

            <DashboardCard
              title="Tasks"
              description="Track workflows and tasks"
            />

            <DashboardCard
              title="Reports"
              description="Analytics and AI summaries"
            />
          </div>
      </section>
    </main>
  );
}