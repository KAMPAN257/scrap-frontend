// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styles from '../../assets/SellerSidebar.module.css'; // Create this CSS file

// const SellerSidebar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Implement your logout logic here (e.g., clearing tokens, local storage)
//     console.log('Seller logged out');
//     navigate('/seller/login'); // Redirect to seller login page
//   };

//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.logo}>Seller Dashboard</div>
//       <ul className={styles.navList}>
//         <li className={styles.navItem}>
//           <Link to="/seller/dashboard" className={styles.navLink}>
//             Dashboard
//           </Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/seller/add-product" className={styles.navLink}>
//             Add Product
//           </Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/seller/manage-products" className={styles.navLink}>
//             Manage Products
//           </Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/seller/orders" className={styles.navLink}>
//             Orders
//           </Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/seller/settings" className={styles.navLink}>
//             Settings
//           </Link>
//         </li>
//       </ul>
//       <button onClick={handleLogout} className={styles.logoutButton}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default SellerSidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from '../../assets/SellerSidebar.module.css';

const SellerSidebar = () => {
  return (

    <div className={styles.sidebar}>

      <h2 className={styles.title}>Seller Panel</h2>
      <ul className={styles.menu}>
        
        <li>
          <Link to="/selleraddproduct">Add Products</Link>
        </li>
        <li>
          <Link to="/sellerproductlist">Product List</Link>
        </li>
        
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
      <main className="app-main">
        <Outlet/>
      </main>
    </div>
    
  );
};

export default SellerSidebar;
