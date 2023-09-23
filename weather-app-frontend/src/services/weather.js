import axios from 'axios';
const baseUrl = '/api/weather/today/Resolute';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export default {
    getAll
};