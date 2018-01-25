import React, { Component } from 'react'

class TopNav extends Component {
  render() {
    return (
      <div className="app-header white box-shadow">
        <div className="navbar navbar-inverse" data-spy="affix" data-offset-top="197"">
          {/* <!-- Open side - Naviation on mobile --> */}
          <a data-toggle="modal" data-target="#aside" className="navbar-item pull-left hidden-lg-up">
            <i className="material-icons">&#xe5d2;</i>
          </a>
          <div className="navbar-item pull-left h5" id="pageTitle"></div>
          {/* <!-- navbar right --> */}
          <ul className="nav navbar-nav pull-right">
            <li className="nav-item dropdown">
              <a className="nav-link clear" href data-toggle="dropdown">
                <span className="avatar w-32">
                  <img src="assets/images/a0.png" alt="..." />
                </span>
              </a>
                  <div className="dropdown-menu pull-right dropdown-menu-scale">
                   <a className="dropdown-item" href="login.php">Sign out</a></div>
            </li>
            <li className="nav-item hidden-md-up">
              <a className="nav-link" data-toggle="collapse" data-target="#collapse">
                <i className="material-icons">&#xe5d4;</i>
              </a>
            </li>
          </ul>
          {/* <!-- / navbar right -->         */}
          {/* <!-- navbar collapse --> */}
          <div className="collapse navbar-toggleable-sm" id="collapse">
            {/* <!-- link and dropdown --> */}
            <ul className="nav navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" href data-toggle="dropdown">
                  <i className="fa fa-fw fa-plus text-muted"></i>
                  <span>New</span>
                </a>

              <div className="dropdown-menu dropdown-menu-scale">
                <a className="dropdown-item">Parameter</a>
                <a className="dropdown-item"><span>Controller</span></a>
                <a className="dropdown-item"><span>Controller Family</span></a>
              </div>
              </li>
            </ul>
          </div>
          {/* <!-- / navbar collapse --> */}
        </div>
      </div>
    )
  }
};

export default TopNav;
