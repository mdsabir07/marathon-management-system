import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getApplications = (email) =>
    axios.get(`${BASE_URL}/my-applications/${email}`);

export const updateApplication = (id, data) =>
    axios.put(`${BASE_URL}/update/application/${id}`, data);

export const deleteApplication = (id) =>
    axios.delete(`${BASE_URL}/delete/application/${id}`);
