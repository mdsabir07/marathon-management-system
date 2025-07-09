import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

// Applications api
export const getApplications = (email, query = "") => {
    return axios.get(`${BASE_URL}/my-applications/${email}${query}`);
}
export const updateApplication = (id, data) =>
    axios.put(`${BASE_URL}/update/application/${id}`, data);

export const deleteApplication = (id) =>
    axios.delete(`${BASE_URL}/delete/application/${id}`);

// Marathons API
// Marathons API
export const getUserMarathons = (email) =>
    axios.get(`${BASE_URL}/my-marathons/${email}`);

export const updateMarathon = (id, data) =>
    axios.put(`${BASE_URL}/update/marathon/${id}`, data);

export const deleteMarathon = (id) =>
    axios.delete(`${BASE_URL}/delete/marathon/${id}`);
