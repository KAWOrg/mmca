import axios from "axios";

const BASE_URL = '/api/musumInfo';

let getListTest = async () => {
    try {
        const response = await axios.get(BASE_URL + '/getMusumList');
        return response.data;
    } catch (error) {
        console.error('Error fetching the list:', error);
        throw error;
    }
}

export default {
    getListTest
}