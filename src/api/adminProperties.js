import axiosClient from './axiosClient';

// Create a new property (multipart/form-data)
export const createProperty = formData => {
  return axiosClient.post('/admin/properties', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

// Update an existing property
export const updateProperty = (id, formData) => {
  return axiosClient.put(`/admin/properties/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

// List public properties (e.g. for homepage grid)
export const getPropertyById = (id) => {
    return axiosClient.get(`/properties/${id}`);
  };
  
