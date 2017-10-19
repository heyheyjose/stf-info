import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

class Contact extends Component {
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
        <div className="section-main contact">
          <a onClick={this.toggle}>
            <span className="fa fa-at" />
            <span>Contact</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-contact">
            <h4 style={{ marginBottom: 10 }}>Get in touch with us!</h4>
            <p style={{ marginBottom: 30 }}>Phone: 813-251-1515</p>
            <a
              href="http://stfchurch.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg btn-contact"
            >
              Contact Us
            </a>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Contact;
