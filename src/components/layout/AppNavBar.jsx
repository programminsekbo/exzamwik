import React from 'react';
import { Link } from 'react-router-dom';

const AppNavBar = () => {
    return (
      


<>


<div className="container-fluid text-white p-2 bg-success">
        <div className="container">
        <div className="row justify-content-around">
        <div className="col-md-6">
        <span>
        <span className="f-12">
        <i className="bi bi-envelope"></i>rkrafikridoy5887@gmail.com</span>
        <span className="f-12 mx-2">
        <i className="bi bi-envelope"></i>0177875887</span>
        </span>
        </div>
        <div className="col-md-6">
        <span className="float-end">
        <span className="bodySmal mx-2">
        <i className="bi bi-whatsapp"></i>
        </span>
        <span className="bodySmal mx-2">
        <i className="bi bi-youtube"></i>
        </span>
        <span className="bodySmal">
        <i className="bi bi-facebook"></i>
        </span>
        </span>
        </div>
        </div>
        </div>
       </div>
       <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3">
        <div className="container">
        <Link className="navbar-brand" to="/">
        <img className="img-fluid" src="" alt="" width="96px" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06" ariacontrols="nav06" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse" id="nav06">
        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
        <span className="nav-item me-4">
        <Link className="nav-link" to="/">Home</Link>
        </span>
        <span className="nav-item me-4">
        <Link className="nav-link" to="/">About</Link>
        </span>
        <span className="nav-item me-4">
        <Link className="nav-link" to="/">Blog </Link>
        </span>
        <span className="nav-item me-4">
        <Link className="nav-link" to="/">Service</Link>
        </span>
        <span className="nav-item me-4">
        <Link className="nav-link" to="/">Contact</Link>
        </span>
        </ul>
        </div>
   




<div className=" d-lg-flex">

 <Link type="button" className="btn ms-3 btn-success d-flex" to="/profile">Profile</Link>
 <Link type="button" className="btn ms-3 btn-success d-flex" to="/profile">Logout</Link>
 </div>
 </div>
</nav>


</>


    );
};

export default AppNavBar;