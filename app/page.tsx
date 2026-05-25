import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome to FlowDesk AI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">
              Clients
            </h2>

            <p className="text-gray-500 mt-2">
              Manage business clients
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">
              Tasks
            </h2>

            <p className="text-gray-500 mt-2">
              Track workflows and tasks
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">
              Reports
            </h2>

            <p className="text-gray-500 mt-2">
              Analytics and AI summaries
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}