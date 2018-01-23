import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
    // aside
  <div id="aside" className="app-aside modal fade nav-dropdown">
    {/* <!-- fluid app aside --> */}
    <div className="left navside dark dk" layout="column">
      <div className="navbar no-radius">
        {/* <!-- brand --> */}
        <a className="navbar-brand">
          <img src="assets/images/logo.png" alt="."></img>
          <span className="hidden-folded inline">KoolCode AP</span>
        </a>
        {/* <!-- / brand --> */}
      </div>
      <div flex="true" className="hide-scroll">
          <nav className="scroll nav-light">

              <ul className="nav" ui-nav="true">
                <li className="nav-header hidden-folded">
                  <small className="text-muted">Contollers</small>
                </li>

                <li>
                  <a>
                    <span className="nav-caret">
                      <i className="fa fa-caret-down"></i>
                    </span>
                    <span className="nav-icon">
                      <i className="material-icons">&#xe3e8;
                        <span ui-include="'assets/images/i_5.svg'"></span>
                      </i>
                    </span>
                    <span className="nav-text">AK-CC</span>
                  </a>
                  <ul className="nav-sub">
                    <li>
                      <a href="controller.php" >
                        <span className="nav-text">AK-CC 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" >
                        <span className="nav-text">AK-CC 250A</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" >
                        <span className="nav-text">AK-CC 210B</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a>
                    <span className="nav-caret">
                      <i className="fa fa-caret-down"></i>
                    </span>
                    <span className="nav-icon">
                      <i className="material-icons">&#xe3e8;
                        <span ui-include="'assets/images/i_5.svg'"></span>
                      </i>
                    </span>
                    <span className="nav-text">AK-PC</span>
                  </a>
                  <ul className="nav-sub">
                    <li>
                      <a href="#" >
                        <span className="nav-text">AK-PC 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" >
                        <span className="nav-text">AK-PC 210A</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" >
                        <span className="nav-text">AK-PC 210B</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a>
                    <span className="nav-caret">
                      <i className="fa fa-caret-down"></i>
                    </span>
                    <span className="nav-icon">
                      <i className="material-icons">&#xe3e8;
                        <span ui-include="'assets/images/i_5.svg'"></span>
                      </i>
                    </span>
                    <span className="nav-text">EKC</span>
                  </a>
                  <ul className="nav-sub">
                    <li>
                      <a href="#" >
                        <span className="nav-text">EKC 102</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" >
                        <span className="nav-text">EKC 103</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" >
                        <span className="nav-text">EKC 104</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a>
                    <span className="nav-caret">
                      <i className="fa fa-caret-down"></i>
                    </span>
                    <span className="nav-icon">
                      <i className="material-icons">&#xe3e8;
                        <span ui-include="'assets/images/i_5.svg'"></span>
                      </i>
                    </span>
                    <span className="nav-text">ERC</span>
                  </a>
                  <ul className="nav-sub">
                    <li>
                      <a href="#" >
                        <span className="nav-text">ERC 102</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" >
                        <span className="nav-text">ERC 102</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" >
                        <span className="nav-text">ERC 102</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" >
                    <span className="nav-icon">
                      <i className="material-icons">&#xe3e8;
                        <span ui-include="'assets/images/i_5.svg'"></span>
                      </i>
                    </span>
                    <span className="nav-text">Other</span>
                  </a>
                </li>

                <li className="nav-header hidden-folded">
                  <small className="text-muted">Manage</small>
                </li>

                <li>
                  <a href="controller-family.php" >
                    <span className="nav-icon">
                      <i className="material-icons">&#xe429;
                        <span ui-include="'assets/images/i_4.svg'"></span>
                      </i>
                    </span>
                    <span className="nav-text" >Controller Family</span>
                  </a>
                </li>
                <li>
                  <a href="controllers.php" >
                    <span className="nav-icon">
                      <i className="material-icons">&#xe429;
                        <span ui-include="'assets/images/i_4.svg'"></span>
                      </i>
                    </span>
                    <span className="nav-text" >Controllers</span>
                  </a>
                </li>
              </ul>
          </nav>
      </div>
    </div>
  </div>
  );
  }
}

export default Menu;
