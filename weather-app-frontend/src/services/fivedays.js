import axios from 'axios';
const baseUrl = '/api/prediction/fivedays/Kolkata';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export default {
    getAll
};