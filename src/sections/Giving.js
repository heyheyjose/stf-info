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
      <div>
        <div className="section-main giving">
          <a onClick={this.toggle}>
            <span className="fa fa-building-o" />
            <span>Giving</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-giving">
            <p>[ this is the Giving component ]</p>
            <p>some stuff in here</p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Giving;
