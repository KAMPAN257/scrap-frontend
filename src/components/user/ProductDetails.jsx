import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../assets/ProductDetails.module.css';
import '../../assets/landing/LandingPage.css'

const ProductDetails = () => {
  console.log("hello guys..");
    
  const { id } = useParams();
  console.log("productId ===", id);
   
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/getallproductdetailsbyproductId/${id}`);

        console.log("product....",response.data.data);
        
        setProduct(response.data.data); // Assuming your backend responds with { data: {...product} }
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch product details');
        setLoading(false);
        console.log(err);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = (Product) => {
    // Get existing cart data
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Add the new product to cart
    existingCart.push(Product);
  
    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
  
    alert(`${Product.productName} added to cart!`);
  };
  

  // const handleAddToCart = async (product) => {
  //   try {
  //     // Assuming you have an API endpoint to add items to the cart
  //     const response = await axios.post('/addcart', {
  //       productdetailId: productdetail._id,
  //       quantity: 1, // You might want to allow users to select quantity
  //       name: product.productName,
  //       price: product.price,
  //       // Add other relevant product details you want to store in the cart
  //     });
  //     console.log("Added to cart:", response.data);
  //     // Optionally, provide feedback to the user (e.g., a notification)
  //   } catch (error) {
  //     console.error("Error adding to cart:", error.response?.data?.message || error.message);
  //     // Optionally, display an error message to the user
  //   }
  // };

//   return (
//     <div>
//       <h1>Product Details</h1>
//       {
//         Product.map((prod)=>{
//             return <h2>{prod.productName}</h2>
            
//         })
//       }
//       {/* {Product.imageUrl && (
//         <img src={Product.imageUrl} alt={Product.productName} className={styles.productImage} />
//       )}
//       <p><strong>Details:</strong> {Product.details}</p>
//       {Product.price && <p><strong>Price:</strong> {Product.price}</p>} */}
//       {/* {productdetails.weight && <p><strong>Weight:</strong> {productdetails.weight}</p>} */}
//     </div>
//   );


return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            ScrapeGenie
          </a>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                About Us
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/selectloginrole" className="navbar-link">
                Log In
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/selectrole" className="navbar-link">
                Sign Up
              </Link>
            </li>
          </ul>
          <div className="navbar-cart">
            <a href="/cart" className="navbar-cart-link black-cart">
              🛒
              {/* Optional cart count */}
              {/* <span className="cart-count">3</span> */}
            </a>
          </div>
        </div>
      </nav>
      <h1 className={styles.h1}>Product Details</h1>
      <div className={styles.productListContainer}> 
      {Product.map((prod) => (
        <div key={prod._id} className={styles.productCard}>
          <h2>{prod.productName}</h2>
          {prod.imageUrl && (
            <img
              src={prod.imageUrl}
              alt={prod.productName}
              className={styles.productImage}
            />
          )}
          {prod.price && <p><strong>Price:</strong> {prod.price}</p>}
          {/* <Link to={`/cart/${prod._id}`} className={styles.viewDetailsButton}>
                          Add To Cart
                </Link> */}
                {/* <button onClick={() => onAddToCart(prod)}>Add to Cart</button> */}

                <button onClick={() => handleAddToCart(prod)}>Add to Cart</button>


                {/* <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button> */}

          {/* Add other product details here */}
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductDetails;
