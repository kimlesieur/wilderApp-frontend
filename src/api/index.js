import axios from 'axios';

export const getUsers = async () => {
    const {data} = await axios({
        method: 'GET',
        url: 'http://localhost:4001/wilders/',
    });
    return data;
};

export const createUser = async (name) => {
    const {data} = await axios({
        method: 'POST',
        url: 'http://localhost:4001/wilders',
        data: {
            name: `${name}`
        }
    });
    return data;
};

export const deleteUser = async (id) => {
    const {data} = await axios({
        method: 'DELETE',
        url: `http://localhost:4001/wilders/${id}`,
    });
    return data;
}
