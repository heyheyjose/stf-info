import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

import Input from '../core/connect-form/Input';

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
            <h5 className="content-section-connect-title">
              Fill out a connection card so we can better understand how we can serve you!
            </h5>
            <form method="POST" action="http://formspree.io/jose.vazquez.dev+formspree@gmail.com">
              <Input type="text" htmlId="connect-input-name" label="Name" name="Name" required />
              <Input type="email" htmlId="connect-input-email" label="Email" name="_reply" required />
              <Input type="tel" htmlId="connect-input-phone" label="Phone (optional)" name="Phone" />
              <label className="connect-form-label" htmlFor="connect-input-request">
                Prayer Requests (optional)
              </label>
              <textarea id="connect-input-request" name="Prayer Request" />
              <input type="hidden" name="_next" value="/" />
              <div style={{ textAlign: 'center', margin: 20 }}>
                <button type="submit" className="btn btn-outline-primary btn-lg btn-connect-card">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Connect;
