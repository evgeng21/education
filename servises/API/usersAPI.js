import myAxios from "./apiConfig";
import axios from "axios";


export default async function usersAPI(setUsers) {

    const baseUrl = 'https://demo-apptrix.myjetbrains.com/youtrack/api/admin/users?fields=id,login,name,email'
    const token = localStorage.getItem('access_token')
    const res = await myAxios.get(baseUrl)
        .then((resp) => {return resp.data})
        .catch((err) => {return err})
    console.log(res)

}