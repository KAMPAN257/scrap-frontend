

import React from "react";
import { AdminNavbar } from "./AdminNavbar";
import { Link, Outlet } from "react-router-dom";
import styles from './AdminSIdebar.module.css'

export const AdminSidebar = () => {
  
  return (
    <>
      <AdminNavbar></AdminNavbar>
      <aside
        className={styles.sidebar}
        data-bs-theme="dark"  
      >
        <div className={styles.sidebarBrand}>
          {/*begin::Brand Link*/}
          <a href="./index.html" className="brand-link">
            {/*begin::Brand Image*/}
            
            {/*end::Brand Image*/}
            {/*begin::Brand Text*/}
            <span className="brand-text fw-light">ScrapeGenie</span>
            {/*end::Brand Text*/}
          </a>
          {/*end::Brand Link*/}
        </div>

        <div
          className=""
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            {/*begin::Sidebar Menu*/}
            <ul
              className={styles.sidebarMenu}


              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link to="buyerlist" className={styles.navLink + ' ' + styles.active}>
                  <i className={styles.navIcon} />
                  <p>
                    View All Buyers 
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  
                  <li className={styles.navItem}>
                    <Link to="sellerlist" className={styles.navLink}>
                      <i className={styles.navIcon} />
                      <p>View All Sellers</p>
                    </Link>
                  </li>
                  
                  <li className={styles.navItem}>
                    <Link to="productlist" className={styles.navLink}>
                      <i className={styles.navIcon} />
                      <p>View All Products</p>
                    </Link>
                  </li>
                  
                  
                  <li className={styles.navItem}>
                    <Link to="productdetaillist" className={styles.navLink}>
                      <i className={styles.navIcon} />
                      <p>View All ProductDetail</p>
                    </Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link to="cartlist" className={styles.navLink}>
                      <i className={styles.navIcon}/>
                      <p>View All Carts</p>
                    </Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link to="rolelist" className={styles.navLink}>
                      <i className={styles.navIcon} />
                      <p>View All Roles</p>
                    </Link>
                  </li>
                  
                 
                </ul>
              </li>
              {/* <li className="nav-item">
                <a href="./generate/theme.html" className="nav-link">
                  <i className="nav-icon bi bi-palette" />
                  <p>Theme Generate</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-box-seam-fill" />
                  <p>
                    Widgets
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./widgets/small-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Small Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/info-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>info Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/cards.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Cards</p>
                    </a>
                  </li> */}
                {/* </ul>
              </li> */}
            </ul>
            {/*end::Sidebar Menu*/}
          </nav>
        </div>
      </aside>
      <main className="app-main">
        <Outlet/>
      </main>
    </>
  );
};