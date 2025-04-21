

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../../assets/addProduct.css'; // Import your CSS file

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const userId = localStorage.getItem('id'); // Assuming you store the user ID in local storage

//   useEffect(() => {
//     const fetchUserProducts = async () => {
//       try {
//         if (userId) {
//           //const response = await axios.get(`/user/${userId}/products`);
//           const response = await axios.get("/getproducts");
//           setProducts(response.data.data); // Assuming your API returns an array of product objects in 'data'
//         }
//       } catch (error) {
//         console.error('Error fetching user products:', error);
//         // Optionally display an error message to the user
//       }
//     };

//     fetchUserProducts();
//   }, [userId]);

//   if (products.length === 0) {
//     return <div className="my-products-container"><h2>No products listed yet.</h2></div>;
//   }

//   return (
//     <>
    


//     <div className="my-products-container">
//       <h2>Our Products</h2>
//       <div className="products-grid">
//         {products.map((product) => (
//           <div key={product._id} className="product-card">
//             {product.imageUrl && (
//               <div className="product-image-container">
//                 <img src={product.imageUrl} alt={product.materialType} className="product-image" />
//               </div>
//             )}
//             <div className="product-details">
//               <h3>{product.materialType}</h3>
//               <p>Product Name: {product.productName} {product.unit}</p>
//               {/* {product.productName && <p>Quality: {product.productName}</p>} */}
//               <p>Details: {product.details}</p>
//               {product.price && <p>Price: {product.price}</p>}
//               {/* <p>Contact: {product.contactInformation}</p> */}
//               {/* You can add more details or buttons here (e.g., Edit, Delete) */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Product;


//----------------------------------------------------------------------------------------

// import React from 'react';
// import './LandingPage.css'; // Create LandingPage.css for styling
// import { Link } from 'react-router-dom';


// function Product() {
//   const features = [
//     {
//         title: 'Verified Recyclable Listings',
//         description: 'Ensure the quality and authenticity of listed recyclable materials with detailed categorization and transparent specifications.',
//         icon: '/images/plastic.jpg', // Path to your verified icon
//     },
//     {
//       title: 'Traceable Waste Journey',
//       description: 'Track the journey of recyclable materials from seller to buyer, promoting accountability and ethical reuse within supply chains.',
//       icon: '🔗',
//     },
//     {
//       title: 'Environmental Impact Tracking',
//       description: 'Monitor and analyze the environmental impact of your transactions, contributing to a greener economy and informed decision-making.',
//       icon: '📊',
//     },
//     {
//       title: 'Community Marketplace For Recyclers',
//       description: 'Connect with a network of verified individuals and businesses dedicated to sustainable recycling and responsible waste management.',
//       icon: '🤝',
//     },
//     {
//       title: 'Ethical Reuse Justification',
//       description: 'Buyers are required to justify their purchase, ensuring materials are used for ethical and environmentally sound recycling purposes.',
//       icon: '✅ ',
//     },
//   ];

//   const steps = [
//     {
//       title: 'List Your Recyclables',
//       description: 'Sellers (individuals or companies) can easily create listings for their recyclable waste materials. This includes specifying the type of material (plastic, paper, e-scrap, etc.), quantity, quality, and any relevant details to attract potential buyers.',
//       icon: '📦',
//     },
//     {
//       title: ' Connect with Responsible Buyers',
//       description: 'Buyers interested in specific recyclable materials can browse listings and connect directly with sellers. ScrapeGenie facilitates communication to discuss material specifics, pricing, and logistics.',
//       icon: '🤝',
//     },
//     {
//       title: 'Justify Ethical Reuse',
//       description: 'To ensure environmentally friendly practices, buyers are required to provide a clear justification for their purchase. This step promotes responsible recycling and prevents misuse of valuable resources.',
//       icon: '✅ ',
//     },
//     {
//       title: 'Transparent Transactions',
//       description: 'ScrapeGenie provides a platform for transparent transactions, allowing both buyers and sellers to track the process and maintain records. This fosters trust and accountability within the recycling ecosystem.',
//       icon: '📄  ',
//     },
//     {
//       title: 'Contribute to a Greener Future',
//       description: 'By facilitating the responsible trade of recyclable waste, ScrapeGenie helps divert materials from landfills, conserves natural resources, and encourages a circular economy, ultimately contributing to a more sustainable and environmentally conscious future.',
//       icon: '🌱',
//     },
//   ];

//   const testimonials = [
//     {
//       quote: 'Eco-Trade has made it easy to find and support sustainable businesses.',
//       author: 'Jane Doe',
//     },
//     {
//       quote: 'I love being part of a community that cares about the environment.',
//       author: 'John Smith',
//     },
//   ];

//   return (
//     <div className="landing-page">


// <nav className="navbar">
//   <div className="navbar-container">
//     <a href="/" className="navbar-logo">
//       ScrapeGenie
//     </a>
//     <ul className="navbar-menu">
//       <li className="navbar-item">
//         <a href="/about" className="navbar-link">
//           About Us
//         </a>
//       </li>
//       <li className="navbar-item">
//         <Link to="/login" className="navbar-link">
//           Log In
//         </Link>
//       </li>
//       <li className="navbar-item">
//         <Link to="/signup" className="navbar-link">
//           Sign Up
//         </Link>
//       </li>
//     </ul>
//     <div className="navbar-cart">
//       <a href="/cart" className="navbar-cart-link black-cart">
//         {/* Unicode Shopping Cart Symbol */}
//         🛒
//         {/* Optional cart count */}
//         {/* <span className="cart-count">3</span> */}
//       </a>
//     </div>
//   </div>
// </nav>

     

//       <section className="features">
//         <h2>Key Features</h2>
//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <div className="feature-item" key={index}>
//               {/* <span className="feature-icon">{feature.icon}</span> */}
//               <img src={feature.icon} alt={feature.title} className="feature-icon" /> {/* Use <img> tag */}
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       </div>
//   )
// }

// export default Product;

//------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../../assets/addProduct.css'; // Import your CSS file

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const userId = localStorage.getItem('id'); // Assuming you store the user ID in local storage

//   useEffect(() => {
//     const fetchUserProducts = async () => {
//       try {
//         if (userId) {
//           //const response = await axios.get(`/user/${userId}/products`);
//           const response = await axios.get("/getproducts");
//           setProducts(response.data.data); // Assuming your API returns an array of product objects in 'data'
//         }
//       } catch (error) {
//         console.error('Error fetching user products:', error);
//         // Optionally display an error message to the user
//       }
//     };

//     fetchUserProducts();
//   }, [userId]);

//   if (products.length === 0) {
//     return <div className="my-products-container"><h2>No products listed yet.</h2></div>;
//   }

//   return (
//     <div className="my-products-container">
//       <h2>Our Products</h2>
//       <div className="products-list-horizontal"> {/* Changed to a horizontal list class */}
//         {products.map((product) => (
//           <div key={product._id} className="product-card-horizontal"> {/* Changed to a horizontal card class */}
//             {product.imageUrl && (
//               <div className="product-image-container-horizontal"> {/* Changed to a horizontal image container */}
//                 <img src={product.imageUrl} alt={product.materialType} className="product-image-horizontal" /> {/* Changed to a horizontal image class */}
//               </div>
//             )}
//             <div className="product-details-horizontal"> {/* Changed to a horizontal details class */}
//               <h3>{product.materialType}</h3>
//               <p>Product Name: {product.productName} {product.unit}</p>
//               <p>Details: {product.details}</p>
//               {product.price && <p>Price: {product.price}</p>}
//               {/* You can add more details or buttons here (e.g., Edit, Delete) */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;

//------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// //import '../../assets/addProduct.css';
// import styles from '../../assets/Product.module.css'

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const userId = localStorage.getItem('id'); // Assuming you store the user ID in local storage

//   useEffect(() => {
//     const fetchUserProducts = async () => {
//       try {
//         if (userId) {
//           //const response = await axios.get(`/user/${userId}/products`);
//           const response = await axios.get("/getproducts");
//           setProducts(response.data.data); // Assuming your API returns an array of product objects in 'data'
//         }
//       } catch (error) {
//         console.error('Error fetching user products:', error);
//         // Optionally display an error message to the user
//       }
//     };

//     fetchUserProducts();
//   }, [userId]);

//   if (products.length === 0) {
//     return <div className="my-products-container centered-message"><h2>No products listed yet.</h2></div>;
//   }

//   return (
//     // <div className="my-products-container">
//     //   <h2>Our Products</h2>
//     //   <div className="products-list-horizontal centered-list"> {/* Added centered-list class */}
//     //     {products.map((product) => (
//     //       <div key={product._id} className="product-card-horizontal">
//     //         {product.imageUrl && (
//     //           <div className="product-image-container-horizontal">
//     //             <img src={product.imageUrl} alt={product.materialType} className="product-image-horizontal" />
//     //           </div>
//     //         )}
//     //         <div className="product-details-horizontal">
//     //           <h3>{product.materialType}</h3>
              
//     //           <p>Product Name: {product.productName} {product.unit}</p>
//     //           <p>Details: {product.details}</p>
//     //           {product.price && <p>Price: {product.price}</p>}

//     //           {/* You can add more details or buttons here (e.g., Edit, Delete) */}
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>

// //     <div className="product-page-container">
// //   <h2 className="product-page-title">Our Products</h2>
// //   <div className="product-list">
// //     {products.map((product) => (
// //       <div key={product._id} className="product-item-card">
// //         {/* ... */}
// //         <div className="product-details-section">
// //           <h3 className="product-name">{product.productName}</h3>
// //           {/* ... */}
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// // </div>
//   );
// };

// export default Product;

//---------------------------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../assets/Product.module.css'; 
import { Link, Outlet, useParams } from 'react-router-dom';
//import { data } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem('id');
  const {id} = useParams();
  //console.log(data);
  const formData = new FormData();
    
  //formData.append("image",data.imageUrl["/images/plastic.jpg"]);
  // formData.append("image",data.image[0]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        if (userId) {
          const response = await axios.get("/getproducts");
          console.log("respon ..",response.data.data._id);
          // setconstProducts(response.data.data);
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching user products:', error);
      }
    };

    fetchUserProducts();
  }, [userId]);

  

  

  if (products.length === 0) {
    return <div className={styles.myProductsContainer}><h2 className={styles.centeredMessage}>No products listed yet.</h2></div>;
  }

  return (
    <body className={styles.myBody}>
    <div className={styles.myProductsContainer}>
      <h2 className={styles.ourProductsTitle}>Our Products</h2>
      <div className={styles.productsGrid}> 
        {products.map((product) => (
          <div key={product._id} className={styles.productCard}>
            {/* {product.imageUrl && (
              // <div className={styles.productImageContainer}> 
              //  <img
              //     src={product.imageUrl || "/images/plastic.jpg"} 
              //     alt={product.materialType}
              //     className={styles.productImage}
              // />
              //   </div>
              <div className="mb-3">
            
                <input type="file" {...register("imageUrl")}></input>
              </div>
            )} */}
            <td>
                            <img  style ={{height:100,width:100}}src={product?.imageUrl}></img>
            </td>
            <div className={styles.productDetails}> 
              <h3 className={styles.productTitle}>{product.materialType}</h3>
              
              <p className={styles.productName}>Product Name: {product.productName} {product.unit}</p>
              {/* <p className={styles.productDetails}>Details: {product.details}</p>
              {product.price && <p className={styles.productPrice}>Price: {product.price}</p>} */}
              <Link to={`/products/${product._id}`} className={styles.viewDetailsButton}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
     <Outlet/> 
    </div>
    </body>
  );
};

export default Product;

// /${product._id}