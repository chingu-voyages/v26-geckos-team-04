/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { useStateValue } from '../contexts/StateProvider';
import Order from '../components/Orders/Order';

const OrdersStyle = styled.section`
    width: 100%;
    height: 100%;
    background: #eaeded;
    // background: #fff;
    margin: 0;
    padding: 40px 20px;
    border: solid 1px #eaeded;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 579px) {
        // padding: 0;
        min-width: 332px;
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    border-bottom: solid 1px #bbb;
    margin: 20px 0;
`;

const Container = styled.div`
    background: #fff;
    max-width: 700px;
    padding: 20px;
    border-radius: 10px;
    border: solid 2px #ddd;

    h1 {
        font-weight: 300;
        font-size: 30px;  
    }
`;


//temporal test data

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if(user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }
    }, [user]);

    return (
        <OrdersStyle>
            <Container>
                <h1>Your Orders</h1>
                {orders?.map((order, i) => (
                    <Order order={order} key={i} />
                ))}
            </Container>
        </OrdersStyle>
    )
}

export default Orders;
