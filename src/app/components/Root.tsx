import { Outlet, Link, useLocation } from "react-router";
import { BookOpen, Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/items", label: "Selling Items" },
    { path: "/location", label: "Location" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 dark:bg-gray-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <BookOpen className="w-8 h-8" />
              <div>
                <h1 className="font-bold text-xl">Senu Communication</h1>
                <p className="text-xs text-blue-100 dark:text-gray-400">School Items & Writing Books</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md transition ${
                    isActive(link.path)
                      ? "bg-blue-700 dark:bg-gray-800 font-semibold"
                      : "hover:bg-blue-500 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-blue-500 dark:hover:bg-gray-800 transition"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-800 transition"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                className="p-2 hover:bg-blue-700 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md transition ${
                    isActive(link.path)
                      ? "bg-blue-700 dark:bg-gray-800 font-semibold"
                      : "hover:bg-blue-500 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white dark:bg-gray-900 transition-colors">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2026 Senu Communication. All rights reserved.</p>
          <p className="text-xs text-gray-400 mt-1">Your trusted shop for school supplies</p>
        </div>
      </footer>
    </div>
  );
}