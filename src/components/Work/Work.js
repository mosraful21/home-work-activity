import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Contain from '../Contain/Contain';
import './Work.css'


const Work = () => {
    const [contains, setContains] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('contains.json')
            .then(res => res.json())
            .then(data => setContains(data))
    }, []);

    const handleAddToCart = (contain) => {
        const newCart = [...cart, contain];
        setCart(newCart);
    }

    return (
        <div className='contain-container'>

            <div className='contain-body'>
                <div className='home-icon'>
                    <FontAwesomeIcon icon={faHomeUser}></FontAwesomeIcon> <h2 className='title-name'>Home-Work-Activity</h2>
                </div>
                <p className='activity-info'>Select today’s activity</p>

                <div className="works-container">
                    {
                        contains.map(contain => <Contain
                            key={contain.id}
                            c={contain}
                            handleAddToCart={handleAddToCart}
                        ></Contain>)
                    }
                </div>
            </div>


            <div className="cart-container">
                <Cart cart={cart}> </Cart>
            </div>

        </div>
    );
};

export default Work;