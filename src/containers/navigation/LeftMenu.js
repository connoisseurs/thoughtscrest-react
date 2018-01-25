import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftMenu extends Component {
  render() {
    return (
      /* <!-- Sidebar Holder --> */
      <nav id="sidebar">
          <div class="sidebar-header">
              <h3>Bootstrap Sidebar</h3>
          </div>

          <ul class="list-unstyled components">
              <p>Dummy Heading</p>
              <li>
                  {/* <a href="#"><i class="glyphicon glyphicon-home"/> <Link to={`/home`}>Home</Link></a> */}
                  <Link to={`/home`}><i class="glyphicon glyphicon-home"/> Home</Link>
                  {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"><i class="glyphicon glyphicon-home"/> <Link to={`/home`}>Home</Link></a> */}
                  <ul class="collapse list-unstyled" id="homeSubmenu">
                      <li><a href="#">Home 1</a></li>
                      <li><a href="#">Home 2</a></li>
                      <li><a href="#">Home 3</a></li>
                  </ul>
              </li>
              <li>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"><i class="glyphicon glyphicon-menu-hamburger"/> Menu</a>
                  <ul class="collapse list-unstyled" id="pageSubmenu">
                      <li><a href="#">Sub Menu 1</a></li>
                      <li><a href="#">Sub Menu 2</a></li>
                      <li><a href="#">Sub Menu 3</a></li>
                  </ul>
              </li>
              <li>
                  {/* <a href="#"><i class="glyphicon glyphicon-bell"/><Link to={`/about`}>Notifications</Link></a> */}
                  <Link to={`/notifications`}><i class="glyphicon glyphicon-bell"/> Notifications</Link>
              </li>
          </ul>

          {/* <ul class="list-unstyled CTAs">
              <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a></li>
              <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a></li>
          </ul> */}
      </nav>
    )
  }
};

export default LeftMenu;
