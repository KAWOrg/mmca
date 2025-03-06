import axios from "axios";

const BASE_URL = '/api/museums';

// 시설정보 조회
let placeInfo = async (param) => {
    try {
        const response = await axios.get(BASE_URL + '/' + param.musumCd + '/places');
        return response
    } catch (error) {
        
    }
}

// 시설정보 등록
let uploadPlace = async (param) => {
    try {
        const response = await axios.post(BASE_URL + '/place', param, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response
    } catch (error) {
        
    }
}

export default {
    uploadPlace,
    placeInfo
}