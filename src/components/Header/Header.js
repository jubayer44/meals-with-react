import React, { useState } from 'react';
import Products from '../../Products/Products';
import './Header.css'

const Header = () => {
    //Get input value
    const [input, setInput] = useState("s")
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome to My Meals World</h1>
            <div className='input'>
                <input onChange={handleInput} type="text" name="" id="" />
            </div>
            <Products input={input}/>

        </div>
    );
};

export default Header;