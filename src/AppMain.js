import React, { Component } from 'react';
import cs from 'classnames';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import LeftMenu from './containers/navigation/LeftMenu'
import TabComponent from './containers/TabComponent'

import 'react-responsive-tabs/styles.css';
import './index.css';
class AppMain extends Component {
  render() {
    return (
      // <div>
      //   <LeftMenu />
      //   {/* <!-- content --> */}
      //   <div id="content" className="app-content box-shadow-z0" role="main">
      //      <div className="app-body" id="view">
      //       <div className="padding">
      //         <h5 className="_300 margin"><b>AK-CC 210</b></h5>
      //       </div>
      //       <div className="padding">
      //           <div className="p-b-lg clearfix">
      //             <div className="text-center">
      //               <h2 className="_700 m-b">ADAP-KOOL</h2>
      //               <h5 className="m-b-md">AK-PC 420.</h5>
      //               <p> Pack Controller </p>
      //                 <img src="assets/controllers/1.png"/>
      //             </div>
      //           </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>
      <nav id="navHeader" class="navbar navbar-default navigation-clean-search">
          <div>
              <div class="navbar-header">
                <a class="navbar-brand" href="#">
                  <img src="assets/images/ThoughtsCrestLogo1.jpg"/>
                  <span>Company Name</span>
                </a>
              </div>
              <div class="navbar-collapse" id="navcol-1">
                  <form class="navbar-form navbar-left" target="_self">
                      <div class="form-group">
                        <label class="control-label" for="search-field">
                          <i class="glyphicon glyphicon-search"></i>
                        </label>
                        <input class="form-control search-field" type="search" name="search" id="search-field"/>
                     </div>
                  </form>
                  <a class="btn btn-default navbar-btn navbar-right action-button" role="button" href="#">Action </a>
              </div>
          </div>
        </nav>
      <div class="wrapper">

            <LeftMenu />

            {/* <!-- Page Content Holder --> */}
            <div id="content">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                                <i class="glyphicon glyphicon-arrow-left"></i>
                            </button>
                        </div>
                        <div class="navbar navbar-right" id="navcol-1">
                          <form class="" target="_self">
                            <div class="input-group">
                              <input class="form-control search-field"
                                     placeholder="I can help you to find anything you want!" />
                              <div class="input-group-addon" ><i class="fa fa-search"></i></div>
                           </div>
                          </form>
                      </div>
                    </div>
                </nav>

                <div class="container">
                <TabComponent/>
                </div>
            </div>
        </div>
        </div>
    )}};

export default AppMain;
