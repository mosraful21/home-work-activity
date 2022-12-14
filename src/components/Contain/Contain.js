import React from 'react';
import './Contain.css'

const Contain = (props) => {
    const {handleAddToCart} = props;
    const {img, name, time, details, schedule} = props.c;

    return(
        <div className='contain'>
            <img src={img} alt="" />
            <div className="contain-info">
                <p>Name : {name}</p>
                <p>{details}</p>
                <p>Daily Schedule : {schedule}</p>
                <p>Time required  : <strong>{time}m</strong></p>
            </div>
            <button onClick={() => handleAddToCart(props.c)} className='btn-info'>Add to list </button>
        </div>
    )
};

export default Contain;