
import './Cart.css';

const Cart = ({ cartProduct }) => {

    let total = 0;
    let tax;

    for(const cart of cartProduct){
        total = total + cart.price;
        tax = total * 0.1;      
    }
    
    let grandTotal = total + tax;
    
    

    return (
        <div className='cart'>
            <h3 style={{ textAlign: 'center' }}>Selected : {cartProduct.length}</h3>

            <div style={{ padding: '15px' }}>
                <p>Total: ${total}</p>
                <p>tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>

            </div>
        </div >
    );
};

export default Cart;