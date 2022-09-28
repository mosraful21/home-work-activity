import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div className='details'>
                <h4>62kg</h4>
                <h4>4.5</h4>
                <h4>24yrs</h4>
            </div>
            <h3>Add A Break</h3>
            <div className='btn-container'>
                <button className='btn'>10s</button>
                <button className='btn'>20s</button>
                <button className='btn'>30s</button>
                <button className='btn'>40s</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='time-details'>
                <p className='exercise-time'>Exercise time : 0 seconds</p>
                <p className='break-time'>Break time : 0 seconds</p>
            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;