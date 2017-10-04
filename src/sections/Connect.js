import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

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
            <p>[ this is the Connect component ]</p>
            <p>some stuff in here</p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Connect;
