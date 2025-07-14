import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import AdminSidebar from "../components/AdminSidebar";
import { fetchProperties, deleteProperty } from "../api/properties";
import { useNavigate } from "react-router-dom";

export default function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties().then(res => {
      setProperties(res.data);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteProperty(id);
      setProperties(properties.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">Properties</h2>
          <button
            className="mb-4 px-4 py-2 bg-blue-700 text-white rounded"
            onClick={() => navigate("/admin/properties/add")}
          >
            + Add Property
          </button>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="w-full table-auto border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">City</th>
                  <th className="p-2 border">Address</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property._id}>
                    <td className="p-2 border">{property.title}</td>
                    <td className="p-2 border">{property.city}</td>
                    <td className="p-2 border">{property.address}</td>
                    <td className="p-2 border">
                      <button
                        className="bg-yellow-500 px-2 py-1 text-white rounded mr-2"
                        onClick={() => navigate(`/admin/properties/edit/${property._id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 px-2 py-1 text-white rounded"
                        onClick={() => handleDelete(property._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
        <AdminFooter />
      </div>
    </div>
  );
}
