import React from 'react'
import Login from '../Popups/Login';
import Notification from '../Popups/Notification';
import Signup from '../Popups/Signup';
import { Link } from 'react-router-dom';



const UserHeader = () => {
  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="header fixed-top d-flex align-items-center">
  
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="../../assets/img/logo.png" alt="logo"/>
          <span className="d-none d-lg-block">RE<span>O</span>N </span>
        </Link>
      </div>
      {/* <!-- End Logo --> */}


  
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
    <div className='pt-4'>
      <Login/> <Signup/> <Notification/>
    </div>
  
    
  
          <li className="nav-item dropdown pe-3">
  
            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">
              <img src="assets/img/AATHAV.png" alt="Profile" className="rounded-circle"/>
            </a>
  
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li>
                <hr className="dropdown-divider"/>
              </li>
  
  
              <li>
                <a className="dropdown-item d-flex align-items-center" href="/">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>

              <li>
                <a className="dropdown-item d-flex align-items-center" href="/OwnerPage">
                <i class="bi bi-person"></i>
                  <span> My Page</span>
                  </a>
              </li>
  
            </ul>
            {/* <!-- End Profile Dropdown Items --> */}
          </li>
          {/* <!-- End Profile Nav --> */}
  
        </ul>
      </nav>
      {/* <!-- End Icons Navigation --> */}
  
    </header>
    
  );
}

export default UserHeader