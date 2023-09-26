import axios from 'axios';
const baseUrl = '/api/prediction/fivedays';

const getAll = async (city) => {
    const response = await axios.get(`${baseUrl}/${city}`);
    return response.data;
};

export default {
    getAll
};