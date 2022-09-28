import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import Contain from '../../Contain/Contain';
import './Work.css'

const Work = () => {
    const [contains, setContains] = useState([]);

    useEffect( () => {
        fetch('contains.json')
        .then(res => res.json())
        .then(data => setContains(data))
    }, [])

    return (
        <div className='contain-container'>
            <div className="works-container">
                {
                    contains.map(contain => <Contain
                        key={contain.id}
                        c={contain}
                    ></Contain>)
                }
            </div>
            <div className="cart-container">
                <h2>cart part</h2>
            </div>
        </div>
    );
};

export default Work;