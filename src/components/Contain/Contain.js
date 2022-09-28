import React from 'react';
import './Contain.css'

const Contain = (props) => {
    const {img, name, time, details} = props.c;
    return(
        <div className='contain'>
            <img src={img} alt="" />
            <div className="contain-info">
                <p>Name : {name}</p>
                <p>Details : {details}</p>
                <p><small>Time : {time}</small></p>
            </div>
            <button className='btn-info'>Add to list</button>
        </div>
    )
};

export default Contain;