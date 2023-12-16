import axios from "axios";
const baseUrl = import.meta.env.PROD
  ? "https://weather-app-server-eta.vercel.app/revgeo"
  : "/api/revgeo";

const getAll = async (lat, long) => {
  const response = await axios.get(`${baseUrl}/${lat}/${long}`);
  return response.data;
};

export default {
  getAll,
};
