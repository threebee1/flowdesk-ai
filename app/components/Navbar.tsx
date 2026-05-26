export default function Navbar() {
  return (
    <div className="bg-white h-16 rounded-2xl shadow px-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">
          DASHBOARD
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 outline-none"
        />

        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}