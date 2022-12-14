import React, { useEffect, useState } from 'react';
import './Cart.css'
import logo from '../../images/habib.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, getStoredTime } from '../Timedb/Timedb';

const Cart = (props) => {
    const notify = () => {
        toast("Successfully Done Your Activity!", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const {cart} = props;

    let total = 0;
    for(const contain of cart){
        total = total + contain.time; 
    }

    const [breakTime, setTime] = useState(0);
    const addToCart = (breakTime) => {
        addToDb(breakTime);
        setTime(breakTime);
    }
    useEffect( () => {
        const breakTime = [];
        const Break = getStoredTime();
        for(const bt in Break){
            breakTime.push(bt);
        }
        setTime((breakTime[breakTime.length-1]));
    }, [])

    return (
        <div className='cart-body'>

            <div className='user-info'>
                <img src={logo} alt="" />
                <div className='user-info-details'>
                    <h4>Mosraful Habib</h4>
                    <p>Rangpur, Dhaka</p>
                </div>
            </div>

            <div className='details'>
                <h4>62kg</h4>
                <h4>4.5inch</h4>
                <h4>24yrs</h4>
            </div>

            <h3>Add A Break</h3>
            <div className='btn-container'>
                <button className='btn' onClick={() => addToCart(5)}>5m</button>
                <button className='btn' onClick={() => addToCart(10)}>10m</button>
                <button className='btn' onClick={() => addToCart(15)}>15m</button>
                <button className='btn' onClick={() => addToCart(20)}>20m</button>
            </div>

            <h3>Exercise Details</h3>
            <div className='time-details'>
                <p className='exercise-time'>Exercise time : {total} Minutes</p>
                <p className='break-time'>Break time : {breakTime} Minutes</p>
            <button className='activity-btn' onClick={notify}>Activity Completed</button> <ToastContainer />
            </div>

        </div>
    );
};

export default Cart;