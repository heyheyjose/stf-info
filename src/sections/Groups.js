import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

class Groups extends Component {
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
        <div className="section-main groups">
          <a onClick={this.toggle}>
            <span className="fa fa-users" />
            <span>Groups</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-groups">
            <p style={{ marginBottom: 30 }}>
              Browse our small groups and get information on how to sign up.
            </p>
            <a
              href="http://stfchurch.com/communities"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg btn-groups"
            >
              Browse Groups
            </a>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Groups;
