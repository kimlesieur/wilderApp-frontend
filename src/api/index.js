import axios from 'axios';

export const getUsers = async () => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:4001/wilders/',
    });
    return response.data;
};

