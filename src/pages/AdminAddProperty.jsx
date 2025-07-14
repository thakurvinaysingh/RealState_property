import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import AdminSidebar from "../components/AdminSidebar";
import { createProperty } from "../api/adminProperties";
import { useNavigate } from "react-router-dom";

export default function AddProperty() {
  const [form, setForm] = useState({ title: "", city: "", address: "", description: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await createProperty(form);
    setLoading(false);
    navigate("/admin/properties");
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full p-2 border rounded" required />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" />
            {/* Add more fields as needed */}
            <button className="bg-blue-700 text-white px-4 py-2 rounded" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          </form>
        </main>
        <AdminFooter />
      </div>
    </div>
  );
}
