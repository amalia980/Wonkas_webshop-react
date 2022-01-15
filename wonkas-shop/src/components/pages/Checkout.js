import './Checkout.css'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductsContext';

const Checkout = () => {

    const {cartItems, setCartItems} = useContext(ProductContext);

    //calculate total price
    const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);

     const addItems = (product) => {
         const exist = cartItems.find(x => x.id === product.id);
         if(exist) {
             setCartItems(cartItems.map((x => x.id === product.id ? {...exist, 
             quantity: exist.quantity + 1} 
             : x)))
         } else {
             setCartItems([...cartItems, {...product, quantity: 1}]);
         }
     }

     const removeItem = (product) => {
         const exist = cartItems.find((x) => x.id === product.id);
         if (exist.quantity === 1) {
             setCartItems(cartItems.filter((x) => x.id !== product.id));
         } else {
             setCartItems(cartItems.map((x => x.id === product.id ? {...exist, 
                 quantity: exist.quantity - 1} 
                 : x)))
         }
     }

    const checkout = () => {
        alert("Your'e order has been made!")
    }

    return (
        <div className="checkout-div">
            
            <div className='wrapper-items'>
                <div>
            <h1>Checkout</h1>

                <h2>Your'e Products</h2>

                    {cartItems.map((item) => (
                        <div className='product-row'>
                            <div>{item.title}</div>
                                <div className='qty-price'>
                                    <button onClick={() => addItems(item)} className='plus-btn'>+</button>
                                    <button  onClick={() => removeItem(item)} className='minus-btn'>-</button>   
                                    {item.quantity} x ${item.price}
                                </div>
                        </div>
                    ))}
                    

                  <h3>Total price: ${itemsPrice}</h3>
                </div>
            </div>

            <div className='middle-line'></div>
            
            <div className='wrapper-form'>
                <div>
                    <form className='form'>
                        <input className='input' type="text" placeholder='Firstname...'/>
                        <input className='input' type="text" placeholder='Lastname...'/>
                        <input className='input' type="text" placeholder='Street...'/>
                        <input className='input' type="text" placeholder='City...'/>
                        <input className='input' type="number" placeholder='Zip code...'/>
                        <input className='input' type="number" placeholder='Phone...'/>
                        <button className='order-btn' onClick={() => checkout()}>Make Order</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout;