import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    // TODO: refactor this... this is an array of all the potential posts that could be in this category
    // obviously hardcoding the first element in the array here
    const messageSrc = this.props.messages[0] && this.props.messages[0].latest_message_video_link;

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
            {this.props.messages.length > 0 ? (
              <iframe
                title="latest message"
                src={messageSrc}
                width="100%"
                height="210px"
                frameBorder="0"
                allowFullScreen
              />
            ) : (
              <div style={{ margin: 20, color: '#8c8c8c' }}>
                Message video is currently unavailable, please check back later.
              </div>
            )}
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

Message.defaultProps = {
  messages: [],
};

Message.propTypes = {
  messages: PropTypes.array,
};
