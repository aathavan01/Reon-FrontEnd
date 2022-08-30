import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
   <div>
     {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
      <img src= {require('../../assets/img/logo.png')} alt='logo'/>
        <span className="d-none d-lg-block">RE<span>O</span>N Admin</span>
      </Link>
      {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
    </div>
    {/* <!-- End Logo --> */}

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        <li className="nav-item dropdown">

          <Link className="nav-link nav-icon" to="/" data-bs-toggle="dropdown">
            <i className="bi bi-bell theme-text-orange"></i>
            <span className="badge theme-bg-blue badge-number">4</span>
          </Link>
          {/* <!-- End Notification Icon --> */}

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <Link to="/"><span className="badge rounded-pill theme-bg-orange p-2 ms-2">View all</span></Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i className="bi bi-exclamation-circle text-warning"></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i className="bi bi-x-circle text-danger"></i>
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i className="bi bi-check-circle text-success"></i>
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i className="bi bi-info-circle text-primary"></i>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li className="dropdown-footer">
              <Link to="/">Show all notifications</Link>
            </li>

          </ul>
          {/* <!-- End Notification Dropdown Items --> */}

        </li>
        {/* <!-- End Notification Nav --> */}

        <li className="nav-item dropdown">

          <Link className="nav-link nav-icon" to="/" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text theme-text-blue"></i>
            <span className="badge theme-bg-orange badge-number">3</span>
          </Link>
          {/* <!-- End Messages Icon --> */}

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <Link to="/"><span className="badge rounded-pill theme-bg-blue p-2 ms-2">View all</span></Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="message-item">
              <Link to="/">
                <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle"/>
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="message-item">
              <Link to="/">
                <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle"/>
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="message-item">
              <Link to="/">
                <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle"/>
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="dropdown-footer">
              <Link to="/">Show all messages</Link>
            </li>

          </ul>
          {/* <!-- End Messages Dropdown Items --> */}

        </li>
        {/* <!-- End Messages Nav --> */}

        <li className="nav-item dropdown pe-3">

          <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="/" data-bs-toggle="dropdown">
            <img src="assets/img/super-admin-1.jpg" alt="Profile" className="rounded-circle"/>
            <span className="d-none d-md-block dropdown-toggle ps-2 theme-text-blue">Super Admin</span>
          </Link>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Super Admin</h6>
              <span>Super Admin</span>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" to="Profile">
                <i className="bi bi-person"></i>
                <span>My Profile</span>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <Link className="dropdown-item d-flex align-items-center" to="/">
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </Link>
            </li>

          </ul>
          {/* <!-- End Profile Dropdown Items --> */}
        </li>
        {/* <!-- End Profile Nav --> */}

      </ul>
    </nav>
    {/* <!-- End Icons Navigation --> */}

  </header>
  {/* <!-- End Header --> */}
   </div>
  )
}

export default AdminHeader