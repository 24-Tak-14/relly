// Error handling utilities for API calls
import { AxiosError } from 'axios';

interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
  details?: any;
}

export const handleApiError = (error: AxiosError<ApiError>) => {
  let errorMessage = 'An unexpected error occurred.';
  let statusCode = 500;

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    statusCode = error.response.status;
    errorMessage = error.response.data.message || `Error ${statusCode}`;
    if (error.response.data.details) {
      errorMessage += ` Details: ${JSON.stringify(error.response.data.details)}`;
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    statusCode = 503; // Service Unavailable
    errorMessage = 'The server is unreachable. Please try again later.';
  } else {
    // Something happened in setting up the request that triggered an Error
    errorMessage = error.message;
  }

  console.error('API Error:', {
    statusCode,
    message: errorMessage,
    originalError: error,
  });

  return { statusCode, message: errorMessage };
};
