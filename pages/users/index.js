import Layout from "../../components/layout/layout";
import withAuth from "../../components/HOC/withAuth";
import {useEffect, useState} from "react";
import myAxios from "../../servises/API/apiConfig";
import usersAPI from "../../servises/API/usersAPI";

function UsersList() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersAPI(setUsers)
    }, [users])

    return (
        <Layout>
            <h1>Users will be here</h1>
        </Layout>
    )

}

// export async function getStaticProps() {
//     const res = await myAxios('users/')
//     const posts = await res.json()
//
//     return {
//         props: {
//             posts,
//         },
//     }
// }

export default withAuth(UsersList)