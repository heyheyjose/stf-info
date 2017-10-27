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
      <div className="card-style">
        <div className="section-main message">
          <a onClick={this.toggle}>
            <span className="fa fa-book" />
            <span>Latest Message</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div>
            <div className="sap-embed-player">
              <iframe
                title="latest message"
                src="https://subsplash.com/+6bd6/embed/mi/*?video&audio&info&shareable&logoWatermark"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="content-section-message">
              <p style={{ marginBottom: 30 }}>
                Watch the latest message here each week or browse the archive of messages.
              </p>
              <a
                href="http://subsplash.com/stfchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-lg btn-message"
              >
                View Archive
              </a>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Message;
