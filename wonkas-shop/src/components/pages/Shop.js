import './Shop.css';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductsContext';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Shop = () => {

    const {products, cartItems, setCartItems} = useContext(ProductContext);
    const {user} = useContext(UserContext);

    //calculate the price of all items
    const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
    //calculate total price of all different items

    //to not dublicate item, but at the same time add item
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

    //remove each item with 1
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


    return (
        <>
        <div className='welcome'>
                <h2>Welcome {user.firstname}!</h2>
            </div>
            
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
                            <button className='checkout-btn'><Link className='checkout-link' to="/checkout">Checkout</Link></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shop;