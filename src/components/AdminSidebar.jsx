import React from "react";
import { Link } from "react-router-dom";
export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4 space-y-4">
      <nav className="flex flex-col gap-4">
        <Link to="/admin/properties" className="hover:bg-gray-700 p-2 rounded">Properties</Link>
        <Link to="/admin/properties/add" className="hover:bg-gray-700 p-2 rounded">Add Property</Link>
        {/* Add more links if you need */}
      </nav>
    </aside>
  );
}
