import axios from "axios";

const BASE_URL = '/api/museums';

// 시설정보 등록
let uploadPlace = async (data) => {
    try {
        const response = await axios.post(BASE_URL + '/place', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response
    } catch (error) {
        
    }
}

export default {
    uploadPlace
}