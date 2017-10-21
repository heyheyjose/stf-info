import React, { Component } from 'react';

// import css
import './App.css';
import './section.css';
import './responsive.css';
import stfInfoLogo from './stf_logo_short_2tone.png';

// import sections
import Connect from './sections/Connect';
import PrayerRequest from './sections/PrayerRequest';
import Happening from './sections/Happening';
import Message from './sections/Message';
import Groups from './sections/Groups';
import Giving from './sections/Giving';
import Contact from './sections/Contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modifiedPosts: [],
    };
  }

  componentDidMount() {
    const postsUri = 'http://stfchurch.com/wp-json/wp/v2/posts';

    fetch(postsUri)
      .then(response => {
        return response.json();
      })
      .then(posts => {
        const filteredHappening = posts.filter(post => {
          return post.categories.includes(106);
        });
        return filteredHappening;
      })
      .then(postList => {
        const modifiedPosts = [];
        postList.forEach(post => {
          const featuredMediaId = post.featured_media;
          const mediaUri = `http://stfchurch.com/wp-json/wp/v2/media/${featuredMediaId}`;

          const id = post.id,
            date = post.date,
            title = post.title.rendered,
            content = post.post_content_plain_text,
            registerLink = post.f1_register_direct_link;

          if (post.categories.includes(106) && featuredMediaId !== 0) {
            // get media data for post if post includes 'featured_media'
            fetch(mediaUri)
              .then(response => {
                return response.json();
              })
              .then(mediaObject => {
                const withImage = {
                  id,
                  date,
                  title,
                  content,
                  registerLink,
                  image: mediaObject.source_url,
                };
                modifiedPosts.push(withImage);
              });
          } else {
            // do not get media data for post if 'featured_media' is missing
            const withoutImage = {
              id,
              date,
              title,
              content,
              registerLink,
              image: false,
            };
            modifiedPosts.push(withoutImage);
          }
        });
        this.setState({ modifiedPosts });
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  render() {
    return (
      <div className="stf-info-app">
        <img src={stfInfoLogo} alt="logo" className="stf-info-logo" />
        <div>
          <Connect />
          <PrayerRequest />
          <Happening posts={this.state.modifiedPosts} />
          <Message />
          <Groups />
          <Giving />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
