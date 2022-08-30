import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../user/components/Footer'
import AdminMain from '../components/AdminMain'

const PageDetails = () => {
  return (
    <>
      <AdminMain/>

    <main id="main1" class="main1">

<div class="pagetitle">
  <h1 class="theme-text2">Page Details</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/"><i class="bi bi-house-door"></i></Link></li>
      <li class="breadcrumb-item"><Link to="Pages">Pages</Link></li>
      <li class="breadcrumb-item active">Page Details</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section user-details">
  <div class="row">

    <div class="card">
      <div class="card-body">
        {/* <!-- Page Details --> */}
        <table class="table mt-3">
          <tbody>
            <tr>
              <th scope="row" class="col-sm-2">Page ID</th>
              <th class="col-sm-8">#3043</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Status</th>
              <td><span class="badge bg-success">Active</span></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Page Name</th>
              <td>Page Name 1</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Page Logo</th>
              <td><img src="assets/img/page-logo-1.jpg" alt="Profile" class="rounded-circle"/></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Page Banner</th>
              <td><img src="assets/img/page-banner-1.jpg" alt="Profile" class="rounded-3"/></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Description</th>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quia voluptatem facere similique, minima a officia accusantium. Sed, tempora exercitationem dolor similique, dicta possimus ex recusandae aspernatur ut, neque beatae?</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Created Date</th>
              <td>15 Jul 2022</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Last Update</th>
              <td>31 Jul 2022</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Last Update</th>
              <td>#2434</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">User Name</th>
              <td>User Name 1</td>
              <td class="col-sm-8"><Link to="user-details.html?uid=2434" target="_blank"><button type="button" class="btn btn-primary theme-bg-blue">User Details <i class="ri-external-link-fill"></i></button></Link></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">No of Vehicles</th>
              <td>3</td>
              <td class="col-sm-8"><Link to="user-details.html?uid=2434" target="_blank"><button type="button" class="btn btn-warning theme-bg-orange">Vehicle Details <i class="ri-external-link-fill"></i></button></Link></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">No of Hires</th>
              <td>27</td>
              <td class="col-sm-8"><Link to="hire-details.html?pid=3043" target="_blank"><button type="button" class="btn btn-primary theme-bg-blue">Hire Details <i class="ri-external-link-fill"></i></button></Link></td>
            </tr>
          </tbody>
        </table>
        {/* <!-- End Page Details --> */}
      </div>

      <div class="card-footer">
        <Link to="pages"><button type="button" class="mx-2 btn btn-secondary"><i class="bi bi-chevron-double-left"></i> Back</button></Link>
        <button  type="button" class="mx-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#editPage3043">Edit <i class="bi bi-pencil-square"></i></button>
        <button type="button" class="mx-2 btn btn-warning" data-bs-toggle="modal" data-bs-target="#blockPage3043">Block <i class="bi bi-info-circle"></i></button>
        <button type="button" class="mx-2 btn btn-danger" data-bs-toggle="modal" data-bs-target="#deletePage3043">Delete <i class="bi bi-trash"></i></button>
      </div>
    </div>

  </div>
</section>

</main>
{/* <!-- End #main --> */}



{/* <!-- Edit Page Popup --> */}
<div class="modal fade" id="editPage3043" tabindex="-1" data-bs-backdrop="false">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header theme-bg-orange text-white">
      <h5 class="modal-title fw-bold">Edit Page #3043</h5>
      <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
    </div>
    <div class="modal-body">
      {/* <!-- Edit Page Form --> */}
      <form class="row g-3 needs-validation" novalidate>

        <div class="col-md-12">
          <label for="edit-page-name-3043" class="form-label">Page Name</label>
          <input type="text" value="Page Name 1" class="form-control" id="edit-page-name-3043" required/>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please provide a Page Name.</div>
        </div>
        <div class="col-md-6">
          <label for="edit-page-logo-3043" class="form-label">Page Logo</label>
          <input type="file" class="form-control" id="edit-page-logo-3043"/>
        </div>
        <div class="col-md-6">
          <label for="edit-page-banner-3043" class="form-label">Page Banner</label>
          <input type="file" class="form-control" id="edit-page-banner-3043"/>
        </div>
        <div class="col-md-12">
          <label for="edit-page-desc-3043" class="form-label">Page Description</label>
          <textarea rows="6" class="form-control" id="edit-page-desc-2434">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quia voluptatem facere similique, minima a officia accusantium. Sed, tempora exercitationem dolor similique, dicta possimus ex recusandae aspernatur ut, neque beatae?</textarea>
        </div>
        <div class="col-md-12">
          <label for="edit-page-conform-pwd-3043" class="form-label">Your Password</label>
          <input type="password" class="form-control" id="edit-page-conform-pwd-3043" required/>
          <div class="invalid-feedback">Please input password.</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button  type="submit" class="btn btn-primary">Save</button>
        </div>

      </form>
      {/* <!-- End Edit User Form --> */}
    </div>
  </div>
</div>
</div>
{/* <!-- End Edit User Popup--> */}

{/* <!-- Block Page Popup --> */}
<div class="modal fade" id="blockPage3043" tabindex="-1" data-bs-backdrop="false">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header theme-bg-orange text-white">
      <h5 class="modal-title fw-bold">Block Page #3043</h5>
      <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
    </div>
    <div class="modal-body">
      <div class="fw-bold fs-5 text-center conform-dialog">Are You Sure Block This Page</div>
      {/* <!-- Block Page Form --> */}
      <form class="row mt-2 g-3 needs-validation" novalidate>

        <div class="col-md-12">
          <label for="block-user-conform-2434" class="form-label">Conform Message</label>
          <textarea rows="5" class="form-control" id="block-user-conform-2434" required></textarea>
          <div class="invalid-feedback">Please provide conform message.</div>
        </div>
        <div class="col-md-12">
          <label for="block-user-conform-pwd-2434" class="form-label">Your Password</label>
          <input type="password" class="form-control" id="block-user-conform-pwd-2434" required/>
          <div class="invalid-feedback">Please input password.</div>
        </div>

        <div class="px-5">
          <div class="mx-5 d-flex align-items-center justify-content-between">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No <i class="bi bi-x-circle"></i></button>
            <button  type="submit" class="btn btn-primary">Yes <i class="bi bi-check-circle"></i></button>
          </div>
        </div>

      </form>
      {/* <!-- End Block Page Form --> */}
    </div>
  </div>
</div>
</div>
{/* <!-- End Block Page Popup--> */}

{/* <!-- Delete Page Popup --> */}
<div class="modal fade" id="deletePage3043" tabindex="-1" data-bs-backdrop="false">
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
          <label for="delete-page-conform-3043" class="form-label">Conform Message</label>
          <textarea rows="5" class="form-control" id="delete-page-conform-3043" required></textarea>
          <div class="invalid-feedback">Please provide conform message.</div>
        </div>
        <div class="col-md-12">
          <label for="delete-page-conform-pwd-3043" class="form-label">Your Password</label>
          <input type="password" class="form-control" id="delete-page-conform-pwd-3043" required/>
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

export default PageDetails