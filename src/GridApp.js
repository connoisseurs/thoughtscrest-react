import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

const dummySentences = [
	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
	'Donec hendrerit tempor tellus.',
	'Donec pretium posuere tellus.',
	'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
	'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
	'Nulla posuere.',
	'Donec vitae dolor.',
	'Nullam tristique diam non turpis.',
	'Cras placerat accumsan nulla.',
	'Nullam rutrum.',
	'Nam vestibulum accumsan nisl.'
];

class AppGrid extends Component {
  render() {
    return (
      <Grid>
    		<Row className="show-grid">
    			<Col md={6} mdPush={6}>
    				<code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
    				<br />
            {/* <!-- aside --> */}
            <p>Hello world!!!!</p>
            <div id="aside" className="app-aside modal">
            {/* <div id="aside" className="app-aside modal fade nav-dropdown">   */}
              Test text@@@
              {/* <!-- fluid app aside --> */}
              <div className="left navside dark dk" layout="column">
                <div className="navbar no-radius">
                  {/* <!-- brand --> */}
                  <a className="navbar-brand">
                    <img src="assets/images/logo.png" alt="." />
                    <span className="hidden-folded inline">KoolCode AP</span>
                  </a>
                  {/* <!-- / brand --> */}
                </div>
              </div>
            </div>
    			</Col>
          <Col md={6} mdPull={6}>
    				<code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
    				<br />
    				{dummySentences.slice(0, 6).join(' ')}
    			</Col>
    			{/* <Clearfix visibleSmBlock>
    				<code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code>
    			</Clearfix>
    			<Col sm={6} md={3}>
    				<code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
    				<br />
    				{dummySentences.slice(0, 6).join(' ')}
    			</Col>
    			<Col sm={6} md={3}>
    				<code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
    				<br />
    				{dummySentences.slice(0, 2).join(' ')}
    			</Col> */}
    		</Row>
    	</Grid>
    )}};

export default AppGrid;
