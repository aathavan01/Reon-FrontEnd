import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../user/components/Footer'
import AdminMain from '../components/AdminMain'

const PageSetting = () => {
  return (
    <>
    <AdminMain/>

    <main id="main" class="main">

<div class="pagetitle">
  <h1 class="theme-text2">Profile</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/"><i class="bi bi-house-door"></i></Link></li>
      <li class="breadcrumb-item active">Profile</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section profile">
  <div class="row">
    <div class="col-xl-4">

      <div class="card">
        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img src="assets/img/super-admin-1.jpg" alt="Profile" class="rounded-circle"/>
          <h2>Super Admin</h2>
          <h3>Super Admin</h3>
          <div class="social-links mt-2">
            <Link to="/" class="twitter"><i class="bi bi-twitter"></i></Link>
            <Link to="/" class="facebook"><i class="bi bi-facebook"></i></Link>
            <Link to="/" class="instagram"><i class="bi bi-instagram"></i></Link>
            <Link to="/" class="linkedin"><i class="bi bi-linkedin"></i></Link>
          </div>
        </div>
      </div>

    </div>

    <div class="col-xl-8">

      <div class="card">
        <div class="card-body pt-3">
          {/* <!-- Bordered Tabs --> */}
          <ul class="nav nav-tabs nav-tabs-bordered">

            <li class="nav-item">
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
            </li>

            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
            </li>

            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
            </li>

            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-setting">Setting</button>
            </li>

          </ul>
          <div class="tab-content pt-2">

            <div class="tab-pane fade show active profile-overview" id="profile-overview">
              <h5 class="card-title">About</h5>
              <p class="small fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur consequatur quae numquam, deserunt modi itaque ipsum, beatae autem aperiam eligendi rerum quos culpa, similique amet nesciunt officiis odio nisi!</p>

              <h5 class="card-title">Profile Details</h5>

              <div class="row">
                <div class="col-lg-3 col-md-4 label ">Full Name</div>
                <div class="col-lg-9 col-md-8">Super Admin</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Level</div>
                <div class="col-lg-9 col-md-8">Super Admin</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">District</div>
                <div class="col-lg-9 col-md-8">Jaffna</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Address</div>
                <div class="col-lg-9 col-md-8">R0127, REON Street, Reon</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Phone</div>
                <div class="col-lg-9 col-md-8">0123456789</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Email</div>
                <div class="col-lg-9 col-md-8">superadmin@reon</div>
              </div>

            </div>

            <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

              {/* <!-- Profile Edit Form --> */}
              <form>
                <div class="row mb-3">
                  <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                  <div class="col-md-8 col-lg-9">
                    <img src="assets/img/super-admin-1.jpg" alt="Profile"/>
                    <div class="pt-2">
                      <Link to="/" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></Link>
                      <Link to="/" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></Link>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="fullName" type="text" class="form-control" id="fullName" value="Super Admin"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                  <div class="col-md-8 col-lg-9">
                    <textarea name="about" class="form-control" id="about" style={{height: "100px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores est assumenda inventore, distinctio accusamus veritatis alias quo nihil sint eveniet ducimus dolore natus aliquam saepe ipsa explicabo reprehenderit modi magnam.</textarea>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="level" class="col-md-4 col-lg-3 col-form-label">Level</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="level" type="text" class="form-control" id="level" value="Super Admin"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="district" class="col-md-4 col-lg-3 col-form-label">District</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="district" type="text" class="form-control" id="district" value="Jaffna"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="address" type="text" class="form-control" id="Address" value="R0127, REON Street, Reon"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="phone" type="text" class="form-control" id="Phone" value="0123456789"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="email" type="email" class="form-control" id="Email" value="superadmin@reon"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="twitter" type="text" class="form-control" id="Twitter" value="https://twitter.com/#"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="facebook" type="text" class="form-control" id="Facebook" value="https://facebook.com/#"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="instagram" type="text" class="form-control" id="Instagram" value="https://instagram.com/#"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="linkedin" type="text" class="form-control" id="Linkedin" value="https://linkedin.com/#"/>
                  </div>
                </div>

                <div class="text-center">
                  <button type="reset" class="btn btn-primary theme-bg-blue">Reset Changes</button>
                  <button type="submit" class="btn btn-warning theme-bg-orange">Save Changes</button>
                </div>
              </form>
              {/* <!-- End Profile Edit Form --> */}

            </div>

            <div class="tab-pane fade pt-3" id="profile-change-password">
              {/* <!-- Change Password Form --> */}
              <form>

                <div class="row mb-3">
                  <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="password" type="password" class="form-control" id="currentPassword"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="newpassword" type="password" class="form-control" id="newPassword"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="renewpassword" type="password" class="form-control" id="renewPassword"/>
                  </div>
                </div>

                <div class="text-center">
                  <button type="reset" class="btn btn-primary theme-bg-blue">Reset Changes</button>
                  <button type="submit" class="btn btn-warning theme-bg-orange">Change Password</button>
                </div>
              </form>
              {/* <!-- End Change Password Form --> */}

            </div>

            <div class="tab-pane fade pt-3" id="profile-setting">
              {/* <!-- Change Password Form --> */}
              <form>

                <div class="row mb-3">
                  <label for="themeSetting" class="col-md-4 col-lg-3 col-form-label">Theme</label>
                  <div class="col-md-8 col-lg-9">
                    <select aria-label="Default select example" class="form-control"  id="themeSetting">
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                </div>

                <div class="text-center">
                  <button type="reset" class="btn btn-primary theme-bg-blue">Reset Changes</button>
                  <button type="submit" class="btn btn-warning theme-bg-orange">Save Changes</button>
                </div>
              </form>
              {/* <!-- End Change Password Form --> */}

            </div>

          </div>
          {/* <!-- End Bordered Tabs --> */}

        </div>
      </div>

    </div>
  </div>
</section>

</main>
<Footer/>
{/* <!-- End #main --> */}
    </>
  )
}

export default PageSetting