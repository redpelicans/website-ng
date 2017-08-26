import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

const Backend = () => (
  <div id="backend" className="slide">
    <div className="container">
      <div className="strip top">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <h1><FormattedHTMLMessage id="technologies.backend.h" /></h1>
            <p><FormattedHTMLMessage id="technologies.backend.content.p1" /></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="body">
            <div className="image nodejs" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.backend.content.h2" /></h4>
            <p><FormattedHTMLMessage id="technologies.backend.content.p2" /></p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.backend.content.h3" /></h4>
            <p><FormattedHTMLMessage id="technologies.backend.content.p3" /></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.backend.content.h4" /></h4>
            <p><FormattedHTMLMessage id="technologies.backend.content.p4" /></p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="body">
            <h4><FormattedHTMLMessage id="technologies.backend.content.h5" /></h4>
            <p><FormattedHTMLMessage id="technologies.backend.content.p5" /></p>
          </div>
        </div>
      </div>
      <div className="strip bottom">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <p><FormattedHTMLMessage id="technologies.backend.content.p6" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Backend;
