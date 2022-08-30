import React from 'react'
import { Link } from 'react-router-dom'
import AdminMain from '../../components/AdminMain'

const VehiclesBus = () => {
  return (
    <>
      <AdminMain/>

    <main id="main1" class="main1">

<div class="pagetitle">
  <h1 class="theme-text2">Vehicles-Bus</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/"><i class="bi bi-house-door"></i></Link></li>
      <li class="breadcrumb-item active">Vehicles-Bus</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section manage-users">

  <div class="row">
    <div class="Busd pt-3 manage-pages overflow-auto">

      <div class="Busd-body">

        <table class="table table-striped table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">VID</th>
              <th scope="col">Vehicle Name</th>
              <th scope="col">Vehicle No</th>
              <th scope="col">Created Date</th>
              <th scope="col">AC Type</th>
              <th scope="col">Hires</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>#0123</td>
              <td>Maruti Suzuki Alto 800</td>
              <td>NP Bus 0127</td>
              <td>15 Jul 2022</td>
              <td><span class="badge theme-bg-orange">AC</span></td>
              <td>28</td>
              <td><span class="badge bg-success">Active</span></td>
              <td class="d-flex align-items-center justify-content-between">
                <Link to="vehicle-details.html?vid=0123"><button type="button" class="btn btn-success">Details <i class="bi bi-front"></i></button></Link>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#maEditVehicle0123">Edit <i class="bi bi-pencil-square"></i></button>
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



<Link to="/" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>

{/* <!-- Edit Vehicle Popup --> */}
<div class="modal fade" id="maEditVehicle0123" tabindex="-1" data-bs-backdrop="false">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header theme-bg-orange text-white">
      <h5 class="modal-title fw-bold">Edit Vehicle #0123</h5>
      <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
    </div>
    <div class="modal-body">
      <div class="col-md-8">
        <table class="table table-striped table-borderless">
          <tr>
            <th>Vehicle No</th>
            <th>NP Bus 0127</th>
          </tr>
        </table>
      </div>
      {/* <!-- Edit Vehicle Form --> */}
      <form class="row g-3 needs-validation" novalidate>

        <div class="col-md-12">
          <label for="maEdit-vehicle-name-0123" class="form-label">Vehicle Name</label>
          <input type="text" value="Maruti Suzuki Alto 800" class="form-control" id="maEdit-vehicle-name-0123" required/>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please provide Vehicle Name.</div>
        </div>
        <div class="col-md-12">
          <label for="maEdit-vehicle-desc-0123" class="form-label">Vehicle Description</label>
          <textarea rows="8" class="form-control" id="maEdit-vehicle-desc-0123" required>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deserunt veniam vel ipsum. Dicta, ut nisi amet deleniti quo at sed iure labore excepturi odit natus sint tempore, animi id.</textarea>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please provide Vehicle Description.</div>
        </div>
        <div class="col-md-12">
          <label for="maEdit-vehicle-fuel-0123" class="form-label">Fuel Type</label>
          <select aria-label="Default select example" class="form-control" id="maEdit-vehicle-fuel-0123" required>
            <option disabled selected value>Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Super Petrol">Super Petrol</option>
          </select>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please select fuel type.</div>
        </div>
        <div class="col-md-12 my-4">
          <div class="form-check">
            <input class="form-check-input custom-color-input" type="radio" name="acType" id="acType1" value="option1"/>
            <label class="form-check-label" for="acType1">AC</label>
          </div>
          <div class="form-check">
            <input class="form-check-input custom-color-input" type="radio" name="acType" id="acType2" value="option2" checked/>
            <label class="form-check-label" for="acType2">Non AC</label>
          </div>
        </div>
        <div class="col-md-12">
          <label for="maEdit-vehicle-conform-pwd-0123" class="form-label">Your Password</label>
          <input type="password" class="form-control" id="maEdit-vehicle-conform-pwd-0123" required/>
          <div class="invalid-feedback">Please input password.</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button  type="submit" class="btn btn-primary">Save</button>
        </div>

      </form>
      {/* <!-- End Edit Vehicle Form --> */}
    </div>
  </div>
</div>
</div>
{/* <!-- End Edit Vehicle Popup--> */}
    </>
  )
}

export default VehiclesBus