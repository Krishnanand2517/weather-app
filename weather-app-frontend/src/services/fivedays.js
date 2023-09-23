import axios from 'axios';
const baseUrl = '/api/prediction/fivedays/Resolute';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export default {
    getAll
};