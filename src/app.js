'use strict';

import React from 'react';

import { Row, Col, Panel } from 'react-bootstrap';

import PanelHeader from './panel_header';
import SocialBar from './social_bar';

export default function App() {
  return (
      <Row>
        <Col sm={8} smOffset={2}>
          <Panel bsStyle="primary" header={<PanelHeader/>}>
            <div style={{ float: 'right' }}>
              <SocialBar github="fabiob" bitbucket="fabiodb" twitter="fabiobatista" facebook="fdbatista"/>
            </div>
            <blockquote className="text-right">
              <q>When you don’t create things, you become defined by your tastes rather than ability.
                Your tastes only narrow and exclude people. So create.</q>
              <footer>
                <cite>Why the Lucky Stiff</cite>
              </footer>
            </blockquote>
          </Panel>
        </Col>
      </Row>
  )
}