import axios from 'axios';
const baseUrl = '/api/weather/today/Kolkata';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export default {
    getAll
};