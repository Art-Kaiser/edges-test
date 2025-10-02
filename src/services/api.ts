import axios from 'axios';

//const baseUrl = 'https://drill.greact.ru/api';
const baseUrl = 'http://localhost:3000/api';

export const fetchEdges = async () => {
  const response = await axios.get(`${baseUrl}/edges`);
  return response.data;
};

export const fetchCurrents = async (edgeId: string) => {
  const response = await axios.get(`${baseUrl}/current?edge=${edgeId}`);
  return response.data;
};

export const fetchHistories = async (edgeId: string) => {
  const response = await axios.get(`${baseUrl}/history?edge=${edgeId}`);
  return response.data;
};
