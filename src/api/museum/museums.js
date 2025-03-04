import axios from "axios";

const BASE_URL = '/api/museums';

// 미술관 목록 조회
let getMuseums = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching the list:', error);
        throw error;
    }
}

export default {
    getMuseums
}