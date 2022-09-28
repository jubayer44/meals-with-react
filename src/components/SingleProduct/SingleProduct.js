import React from 'react';
import './SingleProduct.css'

const SingleProduct = ({product, handleBtn}) => {
    // console.log(product)
    const {strMeal, strCategory, strInstructions, strMealThumb, idMeal} = product;
    const newProduct = {
        strMeal, strCategory, strInstructions, strMealThumb, idMeal, price: 200
    }
    return (
        <div>
            <div className='card'>
                <img src={strMealThumb} alt="" />
                <div className='info'>
                <h2>{strMeal}</h2>
                <h4>Price : {newProduct.price}</h4>
                <p>Category: {strCategory}</p>
                <p>{strInstructions ? strInstructions.slice(0, 200) : 'N/A'}</p>
                <button onClick={()=>handleBtn(newProduct)}>click</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;