import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication APIs
export const authApi = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  register: (userData: { email: string; password: string; fullName: string }) =>
    api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
};

// Hospital APIs
export const hospitalApi = {
  getNearbyHospitals: (latitude: number, longitude: number) =>
    api.get('/hospitals/nearby', { params: { latitude, longitude } }),
  getHospitalDetails: (id: string) =>
    api.get(`/hospitals/${id}`),
};

// Appointment APIs
export const appointmentApi = {
  getAppointments: () => api.get('/appointments'),
  createAppointment: (appointmentData: any) =>
    api.post('/appointments', appointmentData),
  cancelAppointment: (id: string) =>
    api.delete(`/appointments/${id}`),
};
