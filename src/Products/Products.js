import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import './Products.css'

const Products = ({ input }) => {

    const [products, setProducts] = useState([])
    const [cartProduct, setCartProduct] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [input])

  
    const { meals } = products;

    const handleBtn = (newProduct) => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        let newCart = [];
        setCartProduct(newCart)
        if(storedCart){
            newCart = [...storedCart, newProduct]
        }
        else {
            newCart.push(newProduct)
            
        }
        setCartProduct(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }





    return (
        <div className='products'>
            <div className='card-container'>
                {
                    meals?.map(product => <SingleProduct
                        product={product} key={product.idMeal}
                        handleBtn={handleBtn}
                    />)
                }
            </div>
            <div className='cart-section'>
                <Cart cartProduct={cartProduct}
                />
            </div>
        </div>
    );
};

export default Products;