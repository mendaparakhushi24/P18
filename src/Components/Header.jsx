export default function Header() {
  return (
    <header className="bg-indigo-700 text-white px-6 py-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            🛍️ ProductHub
          </h1>
          <p className="text-indigo-200 text-sm mt-1">
            Product Management Dashboard
          </p>
        </div>
        <span className="hidden sm:block bg-indigo-600 px-4 py-2 rounded-lg text-sm">
          Admin Panel
        </span>
      </div>
    </header>
  );
}