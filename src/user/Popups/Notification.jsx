import React from 'react'

const Notification = () => {
  return (
    <>
      <button class="mb-4 btn   text-white fw-bold " data-bs-toggle="modal" data-bs-target="#addNewUser">          <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
            <i className="bi bi-bell theme-text-orange"></i>
            <span className="badge theme-bg-blue badge-number">4</span>
          </a></button>

      <div class="modal fade" id="notification" tabindex="-1" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header theme-bg-orange text-white">
        <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
      </div>
      <div class="modal-body">


      <table className='width size'>
                <tr>
                    <td>AATHAV</td>
                    <td><button className='btnYellow'>Details</button></td>
                    <td><button className='btnRed'>Delete</button></td>
                </tr>

                <tr>
                    <td>DILSHAN</td>
                    <td><button className='btnYellow'>Details</button></td>
                    <td><button className='btnRed'>Delete</button></td>
                </tr>

                <tr>
                    <td>KAATHU</td>
                    <td><button className='btnYellow'>Details</button></td>
                    <td><button className='btnRed'>Delete</button></td>
                </tr>

                <tr>
                    <td>ABI</td>
                    <td><button className='btnYellow'>Details</button></td>
                    <td><button className='btnRed'>Delete</button></td>
                </tr>
                
            </table>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Notification