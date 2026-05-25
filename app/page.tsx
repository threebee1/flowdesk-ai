export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold">
        FlowDesk AI Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          Clients
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Tasks
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Reports
        </div>
      </div>
    </main>
  );
}