import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './cartSlice';
import jsonData from './jsonData';
import './App.css'; 

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCart({ productId }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="container">
      <h2>Cart Page</h2>
      <div className="cart-items-container">
        {cart.map((item) => {
          const product = jsonData.products.find((product) => product.id === item.id);
          return (
            <div key={item.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="add-remove">
                 
                  <button onClick={() => handleAddToCart(item.id)}>Add</button>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
                <p className="subtotal">Subtotal: ${product.price * item.quantity}</p>
                <p className="shipping">Shipping: Free</p>
                <p className="total">Total: ${product.price * item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grand-total">
        <h2>Total Quantity: {getTotalQuantity()}</h2>
        <h2>Total Amount: ${getTotalAmount()}</h2>
      </div>
    </div>
  );
};

export default CartPage;
