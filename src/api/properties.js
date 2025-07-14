import axiosClient from './axiosClient';

// List public properties (e.g. for homepage grid)
export const fetchProperties = (limit = 6) => {
  return axiosClient.get('/properties', { params: { limit } });
};

// Get full details for one property
export const fetchPropertyById = id => {
  return axiosClient.get(`/properties/${id}`);
};

// Delete a property
export const deleteProperty = id => {
  return axiosClient.delete(`/admin/properties/${id}`);
};
