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
      happeningPosts: [],
    };
  }

  componentDidMount() {
    const postsUri = 'http://stfchurch.com/wp-json/wp/v2/posts';

    fetch(postsUri)
      .then(response => {
        return response.json();
      })
      .then(posts => {
        const filteredHappening = posts.filter(post =>
          post.categories.includes(106)
        );
        this.setState({ happeningPosts: filteredHappening });
        console.log(filteredHappening);
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  render() {
    return (
      <div className="stf-info-app">
        <img src={stfInfoLogo} className="stf-info-logo" alt="logo" />
        <div>
          <Connect />
          <PrayerRequest />
          <Happening posts={this.state.happeningPosts} />
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
