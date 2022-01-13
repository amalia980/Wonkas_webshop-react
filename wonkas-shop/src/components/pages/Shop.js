import './Shop.css';
import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductsContext';

const Shop = () => {

    const {products} = useContext(ProductContext);

    const [cartItems, setCartItems] = useState([]);
    //calculate the price of all items
    const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
    //calculate total price of all different items

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
        <div className='container'>
            <div className='wrapper-products'>

            {products.map((product) => (
                <div className='card'>
                <div>
                    <img className="img" src={product.img} alt={product.title}/>
                        <div className='card-txts'>
                            <h3 className='card-text'>{product.title}</h3>
                            <h4 className='card-text'>${product.price}</h4>
                        </div>
                        <button onClick={() => addItems(product)} className='btn-card'>Add to Cart</button>
                    </div>
                </div>
                ))}
                       
            </div>

            
           

            <div className='wrapper-cart'>
                <div className='cart'>
                    <div className='cart-container'>
                        <h2>Cart</h2>
                        <hr></hr>
                        <div>{cartItems.length === 0 && <p>Cart is empty...</p>}</div>
                            {cartItems.map((item => (
                                <div key={item.id} className='cart-row'>
                                    <div>{item.title}</div>
                                    
                                    <div className='qty-price'>
                                        <button onClick={() => addItems(item)} className='plus-btn'>+</button>
                                        <button  onClick={() => removeItem(item)} className='minus-btn'>-</button>  

                                        {item.quantity} x ${item.price}
                                    </div>
                                </div>
                            )))}

                            <div className='footer-cart'>
                                <div className='totalPrice-row'><h3>Total: </h3> <p>${itemsPrice}</p></div>
                            <hr></hr>
                            <button onClick={() => checkout()} className='checkout-btn'>Checkout</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;