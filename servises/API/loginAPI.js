import myAxios from "./apiConfig";
import axios from "axios";


export default async function loginAPI({user, password}) {

    const data = {
        username: user,
        password: password
    }

    const access_token = 'perm:cm9vdA==.NDktMQ==.LFQD3WeI6Jr9SyKbN02s924HLyScsb'

    const baseUrl = 'http://erp.apptrix.ru/api/token/';
    await axios.post(baseUrl, JSON.stringify(data), {headers: {
            'Content-Type': 'application/json'
        }})
        .then((response) => {
            localStorage.setItem('access', response.data.access)
            localStorage.setItem('refresh', response.data.refresh)
            localStorage.setItem('access_token', access_token)
        }).catch((err) => {
            alert('Неверное имя пользователя и/или пароль')
            console.log(err)
    });
}