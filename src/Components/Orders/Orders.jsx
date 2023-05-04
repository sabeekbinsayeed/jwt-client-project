import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import OrderTable from './OrderTable';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        console.log('call hosce')
        fetch(`https://complete-project-mechanics-server-sabeekbinsayeed.vercel.app/orders?email=${user?.email}`, {
            headers: {

                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://complete-project-mechanics-server-sabeekbinsayeed.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }


    const handleStatusUpdate = id => {
        fetch(`https://complete-project-mechanics-server-sabeekbinsayeed.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }

    // const handleDelete = id => {
    //     const proceed = window.confirm('Are you sure, you want to cancel this order');
    //     if (proceed) {
    //         fetch(`https://complete-project-mechanics-server-sabeekbinsayeed.vercel.app/orders/${id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('genius-token')}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successfully');
    //                     const remaining = orders.filter(odr => odr._id !== id);
    //                     setOrders(remaining);
    //                 }
    //             })
    //     }
    // }


    return (
        <div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            orders.map(order => <OrderTable order={order} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}></OrderTable>)
                        }

                        {/* row 2 */}

                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default Orders;