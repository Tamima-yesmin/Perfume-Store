import { ReactChild, useEffect, useState } from 'react';
import axios from 'axios';



function AllUsers() {
    const [users, setUsers] = useState(null)


    useEffect(() => {
        axios.get(`/user/getAllUser`)
            .then(res => {
                const user = res.data;
                setUsers(user);
            })
    }, [users]);
    console.log("Users : ", users);


    return (
        <div className=" container">

            {/* <h4>You have {users.length} Users</h4> */}

            <table className='table table-striped  '>
                <thead>
                    <tr className="">

                        <th className='p-3'>Users Name</th>
                        <th className='p-3'>Users Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        users ? users.map(users => (
                            <tr key={users._id}>
                                <td>{users.firstName}  {users.lastName}</td>
                                <td>{users.email}</td>

                                {/* <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td>{items.is_deliverd ? "Product Delivered" : "Pending"}</td>
                                <td><Link to={`/hist/${items._id}`}>View</Link></td> */}
                            </tr>
                        )) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers