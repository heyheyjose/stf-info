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
      <div>
        <div className="section-main connect">
          <a onClick={this.toggle}>
            <span className="fa fa-link" />
            <span>Connect</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-connect">
            <p style={{ marginBottom: 30 }}>
              Fill out a connection card so we can better understand how we can
              serve you!
            </p>
            <a
              href="https://stfc.fellowshiponego.com/external/form/bc536a3a-12e9-467b-b798-de246250254c"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg btn-connect-card"
            >
              Connection Card
            </a>
            {/*}
            <h5 className="content-section-connect-title">
              Fill out the connection card below:
            </h5>
            <Input
              type="text"
              htmlId="connect-input-first-name"
              label="First Name"
            />
            <Input
              type="text"
              htmlId="connect-input-last-name"
              label="Last Name"
            />
            <Input type="email" htmlId="connect-input-email" label="Email" />
            <Input
              type="tel"
              htmlId="connect-input-phone"
              label="Phone Number (optional)"
            />
            <label
              className="connect-form-label-contact"
              htmlFor="connect-input-contact-method"
            >
              Preferred Method of Contact (optional)
            </label>
            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <ButtonGroup size="lg">
                <Button outline>Email</Button>
                <Button outline>Phone</Button>
              </ButtonGroup>
            </div>
            <label
              className="connect-form-label"
              htmlFor="connect-input-request"
            >
              Prayer Requests (optional)
            </label>
            <textarea id="connect-input-request" />
            <div style={{ textAlign: 'center', margin: 20 }}>
              <Button outline size="lg" color="success">
                Submit
              </Button>
            </div>
            {*/}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Connect;
