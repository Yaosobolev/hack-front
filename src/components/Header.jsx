export const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white ">
      <div className="flex max-w-screen-xl mx-auto justify-between items-center p-4  ">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Header</h1>
        <div className="flex items-center"></div>
      </div>
    </header>
  );
};
