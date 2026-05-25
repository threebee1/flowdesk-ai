export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold">
        FlowDesk AI
      </h1>

      <nav className="mt-10 space-y-4">
        <div className="hover:text-blue-400 cursor-pointer">
          Dashboard
        </div>

        <div className="hover:text-blue-400 cursor-pointer">
          Clients
        </div>

        <div className="hover:text-blue-400 cursor-pointer">
          Tasks
        </div>

        <div className="hover:text-blue-400 cursor-pointer">
          Reports
        </div>

        <div className="hover:text-blue-400 cursor-pointer">
          Settings
        </div>
      </nav>
    </aside>
  );
}