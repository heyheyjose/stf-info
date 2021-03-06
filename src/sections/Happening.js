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
    const postsSortedByDescendingDate =
      this.props.posts.length > 0 &&
      this.props.posts.sort((a, b) => {
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
                  <div key={post.id} className="content-section-happening-post-wrapper">
                    {post.image && (
                      <img src={post.image} alt={`${post.title}`} className="content-section-happening-post-image" />
                    )}
                    {post.plainTextTitle.length > 0 ? (
                      <h4 className="content-section-happening-post-title">{post.plainTextTitle}</h4>
                    ) : (
                      <h4 className="content-section-happening-post-title">{post.title}</h4>
                    )}
                    <p className="content-section-happening-post-content">{post.content}</p>
                    {post.content2.length > 0 && (
                      <p className="content-section-happening-post-content">{post.content2}</p>
                    )}
                    {post.content3.length > 0 && (
                      <p className="content-section-happening-post-content">{post.content3}</p>
                    )}
                    {post.content4.length > 0 && (
                      <p className="content-section-happening-post-content">{post.content4}</p>
                    )}
                    {post.content5.length > 0 && (
                      <p className="content-section-happening-post-content">{post.content5}</p>
                    )}
                    {post.contentSmall1.length > 0 && (
                      <p className="content-section-happening-post-content-small">{post.contentSmall1}</p>
                    )}
                    {post.contentSmall2.length > 0 && (
                      <p className="content-section-happening-post-content-small">{post.contentSmall2}</p>
                    )}
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
              <div style={{ margin: 20, color: '#8c8c8c' }}>
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
  posts: [],
};

Happening.propTypes = {
  posts: PropTypes.array,
};
