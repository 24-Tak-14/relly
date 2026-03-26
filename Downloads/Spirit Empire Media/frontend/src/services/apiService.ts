// Placeholder for API service interactions
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api'; // Default to localhost:8000/api

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add JWT token if available (e.g., from local storage)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- Pipeline Management API ---
export const fetchPipelines = async () => {
  const response = await apiClient.get('/pipelines');
  return response.data;
};

export const createPipeline = async (pipelineData: any) => {
  const response = await apiClient.post('/pipelines', pipelineData);
  return response.data;
};

export const getPipeline = async (id: string) => {
  const response = await apiClient.get(`/pipelines/${id}`);
  return response.data;
};

export const updatePipeline = async (id: string, pipelineData: any) => {
  const response = await apiClient.put(`/pipelines/${id}`, pipelineData);
  return response.data;
};

export const deletePipeline = async (id: string) => {
  await apiClient.delete(`/pipelines/${id}`);
};

// --- Task Management API (Stubs) ---
export const fetchTasks = async (pipelineId: string) => {
  const response = await apiClient.get(`/pipelines/${pipelineId}/tasks`);
  return response.data;
};

export const createTask = async (pipelineId: string, taskData: any) => {
  const response = await apiClient.post(`/pipelines/${pipelineId}/tasks`, taskData);
  return response.data;
};

// Add more API functions as needed for other features (e.g., assets, users, auth)
