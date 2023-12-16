import axios from 'axios';
const baseUrl = '/api/revgeo';

const getAll = async (lat, long) => {
    const response = await axios.get(`${baseUrl}/${lat}/${long}`);
    return response.data;
};

export default {
    getAll
};