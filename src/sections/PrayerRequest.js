import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

class PrayerRequest extends Component {
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
        <div className="section-main prayer-request">
          <a onClick={this.toggle}>
            <span className="fa fa-comment-o" />
            <span>Prayer Request</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-prayer">
            <p>[ this is the Prayer Request component ]</p>
            <p>some stuff in here</p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default PrayerRequest;
