import React from "react";

const AdminAside = () => {
  return (
    <>
      {/* <!-- ======= Sidebar ======= --> */}
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link sk" href="/Admin">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="Users">
              <i class="bi bi-people"></i>
              <span>Users</span>
            </a>
          </li>
          {/* <!-- End Users Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="Pages">
              <i class="bi bi-files"></i>
              <span>Pages</span>
            </a>
          </li>
          {/*<!-- End Pages Nav --> */}

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-bs-target="#vehicles-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i class="bi bi-car-front"></i>
              <span>Vehicles</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="vehicles-nav"
              class="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="VehiclesCar">
                  <i class="bi bi-circle"></i>
                  <span>Car</span>
                </a>
              </li>
              <li>
                <a href="VehiclesBus">
                  <i class="bi bi-circle"></i>
                  <span>Bus</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Vehicles Nav --> */}

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-bs-target="#hires-nav"
              data-bs-toggle="collapse"
              href="/"
            >
              <i class="bi bi-geo"></i>
              <span>Hires</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="hires-nav"
              class="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="HiresCar">
                  <i class="bi bi-circle"></i>
                  <span>Car</span>
                </a>
              </li>
              <li>
                <a href="HiresBus">
                  <i class="bi bi-circle"></i>
                  <span>Bus</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Hires Nav --> */}

          <li class="nav-heading">Settings</li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="Profile">
              <i class="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>
          {/* <!-- End Profile Page Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="PageSetting">
              <i class="bi bi-gear"></i>
              <span>Page Settings</span>
            </a>
          </li>
          {/* <!-- End Settings Page Nav --> */}
        </ul>
      </aside>
      {/* <!-- End Sidebar--> */}
    </>
  );
};

export default AdminAside;
