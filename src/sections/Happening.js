import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { posts } = this.props;

    return (
      <div className="card-style">
        <div className="section-main whats-happening">
          <a onClick={this.toggle}>
            <span className="fa fa-calendar" />
            <span>What's Happening</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-happening">
            {/*}
            <p style={{ marginBottom: 30 }}>
              Find information about all of our upcoming events and how to
              register for them.
            </p>
            <a
              href="http://stfchurch.com/info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg btn-happening"
            >
              Upcoming Events
            </a>
            {*/}

            {posts &&
              posts.map(post => {
                return (
                  <div key={post.id} style={{ borderBottom: '3px solid' }}>
                    <h4>{post.title.rendered}</h4>
                    {/* <p>{JSON.stringify(post.content.rendered)}</p> */}
                    <p>{post.post_content_plain_text}</p>
                    <p>media number: {post.featured_media}</p>
                  </div>
                );
              })}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Happening;

Happening.defaultProps = {
  posts: [],
};

Happening.propTypes = {
  posts: PropTypes.array,
};
