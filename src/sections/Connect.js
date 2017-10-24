import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

// import Input from '../core/connect-form/Input';

class Connect extends Component {
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
        <div className="section-main connect">
          <a onClick={this.toggle}>
            <span className="fa fa-link" />
            <span>Connect</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-connect">
            <p style={{ marginBottom: 30 }}>Fill out a connection card so we can better understand how to serve you!</p>
            <a
              href="https://stfc.fellowshiponego.com/external/form/bc536a3a-12e9-467b-b798-de246250254c"
              className="btn btn-outline-primary btn-lg btn-connect-card"
            >
              Connection Card
            </a>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Connect;
