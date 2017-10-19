import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

class Giving extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="card-style">
        <div className="section-main giving">
          <a onClick={this.toggle}>
            <span className="fa fa-building-o" />
            <span>Giving</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-giving">
            <p style={{ marginBottom: 30 }}>
              We are excited to announce an all-new online giving system for
              STF.
            </p>
            <a
              href="http://give.stfchurch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg btn-giving"
            >
              Give Here
            </a>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Giving;
