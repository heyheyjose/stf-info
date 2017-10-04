import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

class Message extends Component {
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
        <div className="section-main message">
          <a onClick={this.toggle}>
            <span className="fa fa-list-ul" />
            <span>Latest Message</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-message">
            <p>[ this is the Latest Message component ]</p>
            <p>some stuff in here</p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Message;
