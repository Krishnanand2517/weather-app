import axios from 'axios';
const baseUrl = '/api/weather/today';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export default {
    getAll
};