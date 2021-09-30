import axios from "axios";
import {useRouter} from "next/router";



const myAxios = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

myAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    }
    return config;
});

myAxios.interceptors.response.use((config) => {
    if(config.status === 401) {
        const access_token = 'perm:cm9vdA==.NDktMQ==.LFQD3WeI6Jr9SyKbN02s924HLyScsb'
        const baseUrl = ' http://erp.apptrix.ru/api/token/refresh/'
        const data = {refresh: localStorage.getItem('refresh')}
        axios.post(baseUrl, JSON.stringify(data))
            .then((resp) => {
                localStorage.setItem('access', resp.data.access)
                localStorage.setItem('access_token', access_token)
            }).catch((err) => {
                localStorage.clear();
                console.log(err)
        })
    }
    return config
})

export default myAxios;