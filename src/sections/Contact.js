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
      <div>
        <div className="section-main contact">
          <a onClick={this.toggle}>
            <span className="fa fa-at" />
            <span>Contact</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-contact">
            <p>[ this is the Contact component ]</p>
            <p>
              could do a contact form here, or link out to the current contact
              form
            </p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Contact;
