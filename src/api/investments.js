import axiosClient from './axiosClient';

// Buy one slot on a property
export const buySlot = id => {
  return axiosClient.post(`/properties/${id}/buy-slot`);
};

// List investments of the logged-in user
export const fetchUserInvestments = () => {
  return axiosClient.get('/investments/my');
};

// Admin: list all investments
export const fetchAllInvestments = (page = 1, limit = 20) => {
  return axiosClient.get('/admin/investments', { params: { page, limit } });
};

// Admin: get one investment by ID
export const fetchInvestmentById = id => {
  return axiosClient.get(`/admin/investments/${id}`);
};

