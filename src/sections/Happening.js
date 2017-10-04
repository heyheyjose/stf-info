import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

class Happening extends Component {
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
        <div className="section-main whats-happening">
          <a onClick={this.toggle}>
            <span className="fa fa-calendar" />
            <span>What's Happening</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-happening">
            <p>[ this is the What's Happening component ]</p>
            <p>some stuff in here</p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Happening;
