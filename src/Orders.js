import React, {useEffect, useState} from 'react';
import './Orders.css'
import {useStateValue} from "./StateProvider";
import Order from "./Order";
import { collection,  onSnapshot, orderBy, query} from "firebase/firestore";
import db from './firebase';

function Orders() {

    const [{ basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user){
            
            if(user?.uid) {
                const ordersRef = collection(db, "users", user.uid, orders);
                const q = query(ordersRef, orderBy('created', 'desc'));
                onSnapshot(q, (querySnapshot) => {
                // TODO: check if docs exist etc.
                 setOrders(querySnapshot.docs.map(doc => ({
                                        id:doc.id,
                                        data:doc.data()
                    })))
                });
            }
        } else {
            setOrders([])
        }


    }, [])


    return (
        <div className="orders">
            <h1> 주문내역 </h1>

            <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>

        </div>
    );
}

export default Orders;