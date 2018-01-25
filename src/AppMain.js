import React, { Component } from 'react';
import cs from 'classnames';
import { Switch, Route } from 'react-router-dom';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import About from './containers/about'
import LeftMenu from './containers/navigation/LeftMenu'
import TabComponent from './containers/TabComponent'

import 'react-responsive-tabs/styles.css';
import './index.css';
import './App.css';
class AppMain extends Component {
  render() {
    return (
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
              <button type="button" id="sidebarCollapse" class="btn btn-default"      height="100%">
                                                      <span class="glyphicon glyphicon-resize-horizontal"></span>
                                                                          </button>

            {/* <!-- Page Content Holder --> */}

            <div id="content">

                <div class="container">
                  <Switch>
                   <Route path='/home' component={About}/>
                   <Route path='/notifications' component={TabComponent}/>
                 </Switch>
                 {/* <TabComponent/> */}
                </div>
            </div>
        </div>
        </div>
    )}};

export default AppMain;
