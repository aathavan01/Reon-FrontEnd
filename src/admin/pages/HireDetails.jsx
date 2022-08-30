import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../user/components/Footer'
import AdminMain from '../components/AdminMain'

const HireDetails = () => {
  return (
    <>
      <AdminMain/>

    <main id="main1" class="main1">

<div class="pagetitle">
  <h1 class="theme-text2">Hire Details</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/"><i class="bi bi-house-door"></i></Link></li>
      <li class="breadcrumb-item"><Link to="HiresCar">Hires</Link></li>
      <li class="breadcrumb-item active">Hire Details</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section user-details">
  <div class="row">

    <div class="card">
      <div class="card-body">
        {/* <!-- User Details --> */}
        <table class="table mt-3 table-bordered">
          <tbody>
            <tr>
              <th colspan="2" class="text-center">Hire Details</th>
              <td></td>
              <th colspan="2" class="text-center">Vehicle Details</th>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Hire ID</th>
              <th>#10983</th>
              <td></td>
              <th scope="row" class="col-sm-2">Vehicle ID</th>
              <th><Link to="/" target="_blank">#0127</Link></th>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Status</th>
              <td><span class="badge bg-warning">Pending</span></td>
              <td></td>
              <th scope="row" class="col-sm-2">Vehicle Type</th>
              <td>Car</td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Vehicle ID</th>
              <td>#0127</td>
              <td></td>
              <th scope="row" class="col-sm-2">Vehicle Name</th>
              <td>Maruti Suzuki Alto 800</td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Vehicle Type</th>
              <td>Car</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Vehicle ID</th>
              <td>#0127</td>
              <td></td>
            </tr>

          </tbody>
        </table>
        {/* <!-- End User Details --> */}
      </div>

      <div class="card-footer">
        <Link to="HiresCar"><button type="button" class="mx-2 btn btn-secondary"><i class="bi bi-chevron-double-left"></i> Back</button></Link>
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

export default HireDetails