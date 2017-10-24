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
      <div className="card-style">
        <div className="section-main prayer-request">
          <a onClick={this.toggle}>
            <span className="fa fa-comment-o" />
            <span>Prayer Request</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-prayer">
            <p style={{ marginBottom: 10 }}>Fill out the form to send us a prayer request.</p>
            <p style={{ marginBottom: 30 }}>Staff prays over each request every Monday.</p>
            <a
              href="https://stfc.fellowshiponego.com/external/form/327a0a96-36f2-4214-92fc-34a191bbbeb6"
              className="btn btn-outline-primary btn-lg btn-prayer-request"
            >
              Create Request
            </a>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default PrayerRequest;
