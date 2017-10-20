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
      postsWithImage: [],
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
        const postsWithImage = [];
        postList.forEach(post => {
          const featuredMediaId = post.featured_media;
          const mediaUri = `http://stfchurch.com/wp-json/wp/v2/media/${featuredMediaId}`;

          const id = post.id,
            date = post.date,
            title = post.title.rendered,
            content = post.post_content_plain_text,
            registerLink = post.f1_register_direct_link;

          if (featuredMediaId) {
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
                  image: mediaObject.source_url,
                  registerLink,
                };
                postsWithImage.push(withImage);
              });
          }
        });
        this.setState({ postsWithImage });
        console.log(postsWithImage);
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
          <Happening posts={this.state.postsWithImage} />
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
