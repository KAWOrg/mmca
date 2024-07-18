import axios from "axios";

const BASE_URL = 'http://localhost:8888/musumInfo';


export default {
    getList: function() {
        return axios.get(BASE_URL + '/getMusumList');
    }
}