import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../user/components/Footer'
import AdminMain from '../components/AdminMain'

const Pages= () => {
  return (
    <>
      <AdminMain/>

    <main id="main" class="main">

<div class="pagetitle">
  <h1 class="theme-text2">Pages</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/"><i class="bi bi-house-door"></i></Link></li>
      <li class="breadcrumb-item active">Pages</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section manage-users">

  <div class="row">
    <div class="card pt-3 manage-pages overflow-auto">

      <div class="card-body">

        <table class="table table-striped table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Page Id</th>
              <th scope="col">Page Name</th>
              <th scope="col">Created Date</th>
              <th scope="col">User Id</th>
              <th scope="col">Vehicles</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>#3043</td>
              <td>Page Name 1</td>
              <td>15 Jul 2022</td>
              <td>#2434</td>
              <td>28</td>
              <td><span class="badge bg-success">Active</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="PageDetails"><button type="button" class="btn btn-success">Details <i class="bi bi-front"></i></button></Link>
                <button type="button" class="btn btn-warning theme-bg-orange" data-bs-toggle="modal" data-bs-target="#maEditPage3043">Edit <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#maDeletePage3043">Delete <i class="bi bi-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</section>

</main>
{/* <!-- End #main --> */}

{/* <!-- Edit Page Popup --> */}
  <div class="modal fade" id="maEditPage3043" tabindex="-1" data-bs-backdrop="false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header theme-bg-orange text-white">
          <h5 class="modal-title fw-bold">Edit Page #3043</h5>
          <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
        </div>
        <div class="modal-body">
          {/* <!-- Edit Page Form --> */}
          <form class="row g-3 needs-validation" novalidate>
    
            <div class="col-md-6">
              <label for="maEdit-user-firstName-2434" class="form-label">First Name</label>
              <input type="text" value="First Name 1" class="form-control" id="maEdit-user-firstName-2434" required/>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please provide First Name.</div>
            </div>
            <div class="col-md-12">
              <label for="maEdit-page-conform-pwd-3043" class="form-label">Your Password</label>
              <input type="password" class="form-control" id="maEdit-page-conform-pwd-3043" required/>
              <div class="invalid-feedback">Please input password.</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button  type="submit" class="btn btn-primary">Save</button>
            </div>
    
          </form>
          {/* <!-- End Edit Page Form --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Edit Page Popup--> */}
  
  {/* <!-- Delete Page Popup --> */}
  <div class="modal fade" id="maDeletePage3043" tabindex="-1" data-bs-backdrop="false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header theme-bg-orange text-white">
          <h5 class="modal-title fw-bold">Delete Page #3043</h5>
          <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
        </div>
        <div class="modal-body">
          <div class="fw-bold fs-5 text-center conform-dialog">Are You Sure Delete This Page</div>
          {/* <!-- Delete Page Form --> */}
          <form class="row mt-2 g-3 needs-validation" novalidate>
    
            <div class="col-md-12">
              <label for="maDelete-page-conform-043" class="form-label">Conform Message</label>
              <textarea rows="5" class="form-control" id="maDelete-page-conform-043" required></textarea>
              <div class="invalid-feedback">Please provide conform message.</div>
            </div>
            <div class="col-md-12">
              <label for="maDelete-page-conform-pwd-043" class="form-label">Your Password</label>
              <input type="password" class="form-control" id="maDelete-page-conform-pwd-043" required/>
              <div class="invalid-feedback">Please input password.</div>
            </div>
    
            <div class="px-5">
              <div class="mx-5 d-flex align-items-center justify-content-between">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No <i class="bi bi-x-circle"></i></button>
                <button  type="submit" class="btn btn-primary">Yes <i class="bi bi-check-circle"></i></button>
              </div>
            </div>

          </form>
          {/* <!-- End Delete Page Form --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Delete Page Popup--> */}
  <Footer/>
    </>
  )
}

export default Pages