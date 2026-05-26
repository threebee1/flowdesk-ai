import {
  LayoutDashboard,
  Users,
  CheckSquare,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold">
        FlowDesk AI
      </h1>

      <nav className="mt-10 space-y-4">
        <div className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <Users size={20} />
          <span>Clients</span>
        </div>

        <div className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <CheckSquare size={20} />
          <span>Tasks</span>
        </div>

        <div className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <BarChart3 size={20} />
          <span>Reports</span>
        </div>

        <div className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  );
}