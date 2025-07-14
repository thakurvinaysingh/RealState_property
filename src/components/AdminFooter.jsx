import React from "react";
export default function AdminFooter() {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      &copy; {new Date().getFullYear()} RealState Property Admin
    </footer>
  );
}
