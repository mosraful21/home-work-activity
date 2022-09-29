import React, { useState } from 'react';
import './Cart.css'
import logo from '../../images/habib.jpeg';



const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const contain of cart){
        total = total + contain.time; 
    }

    const [breakTime, setTime] = useState(0);

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
                <button onClick={() => setTime(5)} className='btn'>5m</button>
                <button onClick={() => setTime(10)} className='btn'>10m</button>
                <button onClick={() => setTime(15)} className='btn'>15m</button>
                <button onClick={() => setTime(20)} className='btn'>20m</button>
            </div>

            <h3>Exercise Details</h3>
            <div className='time-details'>
                <p className='exercise-time'>Exercise time : {total} Minutes</p>
                <p className='break-time'>Break time : {breakTime} Minutes</p>
            <button className='activity-btn'>Activity Completed</button>
            </div>

        </div>
    );
};

export default Cart;