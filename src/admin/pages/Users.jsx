import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../user/components/Footer'
import AdminMain from '../components/AdminMain'

const Users = () => {
  return (
  <>
  <AdminMain/>

  <main id="main1" class="main1">

<div class="pagetitle">
  <h1 class="theme-text2">Users</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/"><i class="bi bi-house-door"></i></Link></li>
      <li class="breadcrumb-item active">Users</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section manage-users">

  <button class="mb-4 btn btn-primary shadow-sm text-white fw-bold theme-bg-blue" data-bs-toggle="modal" data-bs-target="#addNewUser">Add New User <i class="bi bi-person-plus"></i></button>

  <div class="row">
    <div class="card pt-3 manage-user overflow-auto">

      <div class="card-body">

        <table class="table table-striped table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Created Date</th>
              <th scope="col">Is Page</th>
              <th scope="col">Hires</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>#2434</td>
              <td>First Name 1</td>
              <td>15 Jul 2022</td>
              <td><span class="badge theme-bg-orange">No</span></td>
              <td>28</td>
              <td><span class="badge bg-success">Active</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="user-details.html?uid=2434"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#maEditUser2434">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#maDeleteUser2434">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>#2458</td>
              <td>First Name 2</td>
              <td>16 Jul 2022</td>
              <td><span class="badge theme-bg-blue">Yes</span></td>
              <td>0</td>
              <td><span class="badge bg-success">Active</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="user-details.html?uid=2458"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>#2460</td>
              <td>First Name 3</td>
              <td>16 Jul 2022</td>
              <td><span class="badge theme-bg-blue">Yes</span></td>
              <td>3</td>
              <td><span class="badge bg-warning">Blocked</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>#2465</td>
              <td>First Name 4</td>
              <td>17 Jul 2022</td>
              <td><span class="badge theme-bg-orange">No</span></td>
              <td>1</td>
              <td><span class="badge bg-danger">Deleted</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange disabled">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger disabled">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>#2457</td>
              <td>First Name 1</td>
              <td>15 Jul 2022</td>
              <td><span class="badge theme-bg-orange">No</span></td>
              <td>1</td>
              <td><span class="badge bg-success">Active</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>#2458</td>
              <td>First Name 2</td>
              <td>16 Jul 2022</td>
              <td><span class="badge theme-bg-blue">Yes</span></td>
              <td>0</td>
              <td><span class="badge bg-success">Active</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>#2460</td>
              <td>First Name 3</td>
              <td>16 Jul 2022</td>
              <td><span class="badge theme-bg-blue">Yes</span></td>
              <td>3</td>
              <td><span class="badge bg-warning">Blocked</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>#2465</td>
              <td>First Name 4</td>
              <td>17 Jul 2022</td>
              <td><span class="badge theme-bg-orange">No</span></td>
              <td>1</td>
              <td><span class="badge bg-danger">Deleted</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange disabled">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger disabled">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>#2457</td>
              <td>First Name 1</td>
              <td>15 Jul 2022</td>
              <td><span class="badge theme-bg-orange">No</span></td>
              <td>1</td>
              <td><span class="badge bg-success">Active</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>#2458</td>
              <td>First Name 2</td>
              <td>16 Jul 2022</td>
              <td><span class="badge theme-bg-blue">Yes</span></td>
              <td>0</td>
              <td><span class="badge bg-success">Active</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>#2460</td>
              <td>First Name 3</td>
              <td>16 Jul 2022</td>
              <td><span class="badge theme-bg-blue">Yes</span></td>
              <td>3</td>
              <td><span class="badge bg-warning">Blocked</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>#2465</td>
              <td>First Name 4</td>
              <td>17 Jul 2022</td>
              <td><span class="badge theme-bg-orange">No</span></td>
              <td>1</td>
              <td><span class="badge bg-danger">Deleted</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="/"><button type="button" class="btn btn-success">Details <i class="bi bi-file-person"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange disabled">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger disabled">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</section>

</main>

<Link to="/" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>

{/* <!-- Add New User Popup --> */}
<div class="modal fade" id="addNewUser" tabindex="-1" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header theme-bg-orange text-white">
        <h5 class="modal-title fw-bold">Add New User</h5>
        <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
      </div>
      <div class="modal-body">
        {/* <!-- Add New User Form --> */}
        <form class="row g-3 needs-validation" novalidate>

          <div class="col-md-6">
            <label for="add-user-firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="add-user-firstName" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide First Name.
            </div>
          </div>
          <div class="col-md-6">
            <label for="add-user-lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="add-user-lastName" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide Last Name.
            </div>
          </div>
          <div class="col-md-12">
            <label for="add-user-email" class="form-label">Email</label>
            <input type="text" class="form-control" id="add-user-email" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide a Email (Gmail / Yahoomail).
            </div>
          </div>
          <div class="col-md-6">
            <label for="add-user-pwd" class="form-label">Password</label>
            <input type="password" class="form-control" id="add-user-pwd" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide a password.
            </div>
          </div>
          <div class="col-md-6">
            <label for="add-user-repwd" class="form-label">Retype Password</label>
            <input type="password" class="form-control" id="add-user-repwd" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide a password.
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button  type="submit" class="btn btn-warning theme-bg-orange theme-bg-blue">Save</button>
          </div>

        </form>
        {/* <!-- End Add New User Form --> */}
      </div>
    </div>
  </div>
</div>
{/* /<!-- End Add New User Popup--> */}

{/* <!-- Edit User Popup --> */}
<div class="modal fade" id="maEditUser2434" tabindex="-1" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header theme-bg-orange text-white">
        <h5 class="modal-title fw-bold">Edit User #2434</h5>
        <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
      </div>
      <div class="modal-body">
        {/* <!-- Edit User Form --> */}
        <form class="row g-3 needs-validation" novalidate>
  
          <div class="col-md-6">
            <label for="maEdit-user-firstName-2434" class="form-label">First Name</label>
            <input type="text" value="First Name 1" class="form-control" id="maEdit-user-firstName-2434" required/>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please provide First Name.</div>
          </div>
          <div class="col-md-6">
            <label for="maEdit-user-lastName-2434" class="form-label">Last Name</label>
            <input type="text" value="Last Name 1" class="form-control" id="maEdit-user-lastName-2434"/>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please provide Last Name.</div>
          </div>
          <div class="col-md-12">
            <label for="maEdit-user-email-2434" class="form-label">Email</label>
            <input type="text" value="user1@email.com" class="form-control" id="maEdit-user-email-2434" required/>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please provide a Email (Gmail / Yahoomail).</div>
          </div>
          <div class="col-md-12">
            <label for="maEdit-user-profile-2434" class="form-label">Profile</label>
            <input type="file" class="form-control" id="maEdit-user-profile-2434"/>
          </div>
          <div class="col-md-12">
            <label for="maEdit-user-conform-pwd-2434" class="form-label">Your Password</label>
            <input type="password" class="form-control" id="maEdit-user-conform-pwd-2434" required/>
            <div class="invalid-feedback">Please input password.</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button  type="submit" class="btn btn-warning theme-bg-orange">Save</button>
          </div>
  
        </form>
        {/* <!-- End Edit User Form --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- End Edit User Popup--> */}

{/* <!-- Delete User Popup --> */}
<div class="modal fade" id="maDeleteUser2434" tabindex="-1" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header theme-bg-orange text-white">
        <h5 class="modal-title fw-bold">Delete User #2434</h5>
        <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
      </div>
      <div class="modal-body">
        <div class="fw-bold fs-5 text-center conform-dialog">Are You Sure Delete This User</div>
        {/* <!-- Delete User Form --> */}
        <form class="row mt-2 g-3 needs-validation" novalidate>
  
          <div class="col-md-12">
            <label for="maDelete-user-conform-2434" class="form-label">Conform Message</label>
            <textarea rows="5" class="form-control" id="maDelete-user-conform-2434" required></textarea>
            <div class="invalid-feedback">Please provide conform message.</div>
          </div>
          <div class="col-md-12">
            <label for="maDelete-user-conform-pwd-2434" class="form-label">Your Password</label>
            <input type="password" class="form-control" id="maDelete-user-conform-pwd-2434" required/>
            <div class="invalid-feedback">Please input password.</div>
          </div>
  
          <div class="px-5">
            <div class="mx-5 d-flex align-items-center justify-content-between">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No <i class="bi bi-x-circle"></i></button>
              <button  type="submit" class="btn btn-warning theme-bg-orange">Yes <i class="bi bi-check-circle"></i></button>
            </div>
          </div>

        </form>
        {/* <!-- End Delete User Form --> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- End Delete User Popup--> */}
{/* <!-- End #main --> */}
<Footer/>
    </>
  )
}

export default Users