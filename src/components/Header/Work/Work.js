import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Contain from '../../Contain/Contain';
import './Work.css'


const Work = () => {
    const [contains, setContains] = useState([]);

    useEffect(() => {
        fetch('contains.json')
            .then(res => res.json())
            .then(data => setContains(data))
    }, [])

    return (
        <div className='contain-container'>
            <div className='contain-body'>
                <div className='home-icon'>
                    <FontAwesomeIcon icon={faHomeUser}></FontAwesomeIcon> <h2>Home-Work-Activity</h2>
                </div>
                <p className='home-info'>Select today’s activity</p>
                
                <div className="works-container">
                    {
                        contains.map(contain => <Contain
                            key={contain.id}
                            c={contain}
                        ></Contain>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart> </Cart>
            </div>
        </div>
    );
};

export default Work;