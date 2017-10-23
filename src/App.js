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

// import helpers
import { getEvents } from './core/utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modifiedPosts: [],
    };
  }

  componentDidMount() {
    const allPostsUrl = 'http://stfchurch.com/wp-json/wp/v2/posts',
      allMediaUrl = 'http://stfchurch.com/wp-json/wp/v2/media';

    getEvents(allPostsUrl, allMediaUrl)
      .then(modifiedPosts => this.setState({ modifiedPosts }))
      .catch(error => console.log(error));
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
