import React, { Component } from 'react';

// import css
import './App.css';
import './section.css';
import './responsive.css';
import stfInfoLogo from './logo_short.png';

// import sections
import Connect from './sections/Connect';
import PrayerRequest from './sections/PrayerRequest';
import Happening from './sections/Happening';
import Message from './sections/Message';
import Groups from './sections/Groups';
import Giving from './sections/Giving';
import Contact from './sections/Contact';

class App extends Component {
  render() {
    return (
      <div className="stf-info-app">
        <img src={stfInfoLogo} className="stf-info-logo" alt="logo" />
        <Connect />
        <PrayerRequest />
        <Happening />
        <Message />
        <Groups />
        <Giving />
        <Contact />
      </div>
    );
  }
}

export default App;
