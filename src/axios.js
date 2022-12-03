import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/mycactus-9ce23/us-central1/api" //  여기에 클라우드 function 에서 가져온 API URL을 적으면 된다.
});

export default instance;