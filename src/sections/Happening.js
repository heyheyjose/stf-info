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
    const postsSortedByDescendingDate = this.props.posts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

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
            {postsSortedByDescendingDate ? (
              postsSortedByDescendingDate.map(post => {
                return (
                  <div
                    key={post.id}
                    className="content-section-happening-post-wrapper"
                  >
                    {post.image && (
                      <img
                        src={post.image}
                        alt={`${post.title}`}
                        className="content-section-happening-post-image"
                      />
                    )}
                    <h4 className="content-section-happening-post-title">
                      {post.title}
                    </h4>
                    <p className="content-section-happening-post-content">
                      {post.content}
                    </p>
                    {post.registerLink && (
                      <a
                        href={post.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-lg btn-happening"
                      >
                        Register
                      </a>
                    )}
                  </div>
                );
              })
            ) : (
              <div style={{ margin: 20 }}>
                There are no events listed right now, please check back later.
              </div>
            )}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Happening;

Happening.defaultProps = {
  postsSortedByDescendingDate: [],
};

Happening.propTypes = {
  postsSortedByDescendingDate: PropTypes.array,
};
