import { FaShoppingCart } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({items}) => {
    
    if(items.length > 0){
        return (
            <div className="cart">
                <div className="container">
                    <div className="empty-cart">
                        <div><FaShoppingCart/></div>
                        <h1>Shopping cart is empty</h1>
                        <p>You have no items in your shopping cart.</p>
                        <Link to="/">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        );
    }

    else {
    return (
        <div className="cart">
            <div className="container">
                <div className="full-cart">
                    <h2>Shopping cart</h2>
                    <div className="cart-items">
                        {items.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="item-image">
                                    <img src={item.imageSrc} alt=""/>
                                </div>
                                <div className="item-details">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-price">${item.price}</span>
                                    <div className="item-qty">
                                        <span className="minus-btn">-</span>
                                        <input type="text" value={item.qty}/>
                                        <span className="plus-btn">+</span>
                                    </div>
                                    <span className="item-total-price">${item.totalPrice * item.qty}</span>
                                </div>
                                <div className="delete-item">
                                    <i><FaTrashAlt/></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="subtotal">
                        Subtotal<span>$</span>
                    </div>
                    <div className="delete-cart-items">
                        <span><a href="index"><FaReply/> Continue shopping</a></span>
                        <span><FaTrashAlt/> Clear shopping cart</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Cart;