import axios from "axios";
const baseUrl = import.meta.env.PROD
  ? "https://weather-app-server-eta.vercel.app/weather/today"
  : "/api/weather/today";

const getAll = async (city) => {
  const response = await axios.get(`${baseUrl}/${city}`);
  return response.data;
};

export default {
  getAll,
};
