// import React, { useEffect, useState } from 'react';
// //import styles from '../../assets/Cart.module.css';
// import styles from '../../assets/Cart..module.css'

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedCart);
//   }, []);

//   return (
//     <div className={styles.cartContainer}>
//       <h1 className={styles.cartTitle}>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className={styles.emptyCartMessage}>Your cart is empty.</p>
//       ) : (
//         // cartItems.map((item, index) => (
//         //   <div key={index}>
//         //     <h3>{item.productName}</h3>
//         //     <p>Price: ₹{item.price}</p>
//         //   <img src={item.imageUrl} alt={item.productName} width="100" />
//         //   </div>
//         // ))

//         <div className={styles.cartItemsContainer}>
//       {cartItems.map((item, index) => (
//         <div key={index} className={styles.cartItemCard}>
//           <img 
//             src={item.imageUrl} 
//             alt={item.productName} 
//             className={styles.cartItemImage}
//           />
//           <h3 className={styles.cartItemName}>{item.productName}</h3>
//           <p className={styles.cartItemPrice}>Price: ₹{item.price}</p>
//         </div>
//       ))}
//     </div>
//       )}
//     </div>
//   );
// };

// //export default Cart;

// export default Cart;


import React, { useEffect, useState } from 'react';
import styles from '../../assets/Cart..module.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCartMessage}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartItemsContainer}>
            {cartItems.map((item, index) => (
              <div key={index} className={styles.cartItemCard}>
                <img 
                  src={item.imageUrl} 
                  alt={item.productName} 
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <h3 className={styles.cartItemName}>{item.productName}</h3>
                  <p className={styles.cartItemPrice}>Price: ₹{item.price}</p>
                  
                  <div className={styles.quantityControl}>
                    <button 
                      className={styles.quantityBtn}
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{item.quantity || 1}</span>
                    <button 
                      className={styles.quantityBtn}
                      onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                       aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    className={styles.removeBtn}
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.cartSummary}>
            <h3 className={styles.summaryTitle}>Order Summary</h3>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className={styles.summaryRowTotal}>
              <span>Total:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;