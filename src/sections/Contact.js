import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

import CampusInfoCard from '../core/CampusInfoCard';
import ballastPointImg from '../images/ballast.png';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      showBpInfo: false,
      showDiInfo: false,
      showCdInfo: false,
      bpCampusInfo: {
        image: ballastPointImg,
        title: 'Ballast Point Campus',
        address1: '5101 Bayshore Boulevard',
        address2: 'Tampa, Florida 33611',
        serviceTimes: 'Sundays, 9:15 a.m. and 11 a.m.',
      },
      diCampusInfo: {
        image: ballastPointImg,
        title: 'Ballast Point Campus',
        address1: '5101 Bayshore Boulevard',
        address2: 'Tampa, Florida 33611',
        serviceTimes: 'Sundays, 9:15 a.m. and 11 a.m.',
      },
      cdCampusInfo: {
        image: ballastPointImg,
        title: 'Ballast Point Campus',
        address1: '5101 Bayshore Boulevard',
        address2: 'Tampa, Florida 33611',
        serviceTimes: 'Sundays, 9:15 a.m. and 11 a.m.',
      },
    };

    this.toggle = this.toggle.bind(this);
    this.toggleCampusCard = this.toggleCampusCard.bind(this);
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  toggleCampusCard(e) {
    // console.log(e.target);
    if (e.target.innerText === 'Ballast Point Info') {
      this.setState({ showBpInfo: !this.state.showBpInfo });
    } else if (e.target.innerText === 'Davis Islands Info') {
      this.setState({ showDiInfo: !this.state.showDiInfo });
    } else if (e.target.innerText === 'Channel District Info') {
      this.setState({ showCdInfo: !this.state.showCdInfo });
    }
  }

  render() {
    return (
      <div className="card-style">
        <div className="section-main contact">
          <a onClick={this.toggle}>
            <span className="fa fa-at" />
            <span>Contact</span>
            <span className={classNames({ 'fa fa-close': this.state.show })} />
          </a>
        </div>
        <Collapse isOpen={this.state.show}>
          <div className="content-section-contact">
            <h4 style={{ marginBottom: 10 }}>Get in touch with us!</h4>
            <p style={{ marginBottom: 30 }}>Phone: 813-251-1515</p>
            <a
              href="http://stfchurch.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg btn-contact"
            >
              Contact Us
            </a>
            <div style={{ margin: 20 }} />
            <button onClick={this.toggleCampusCard} className="btn btn-outline-primary btn-lg btn-contact">
              Ballast Point Info
            </button>
            <div style={{ margin: 20 }} />
            <button onClick={this.toggleCampusCard} className="btn btn-outline-primary btn-lg btn-contact">
              Davis Islands Info
            </button>
            <div style={{ margin: 20 }} />
            <button onClick={this.toggleCampusCard} className="btn btn-outline-primary btn-lg btn-contact">
              Channel District Info
            </button>

            <Collapse isOpen={this.state.showBpInfo}>
              <CampusInfoCard campusInfo={this.state.bpCampusInfo} />
            </Collapse>
            <Collapse isOpen={this.state.showDiInfo}>
              <CampusInfoCard campusInfo={this.state.diCampusInfo} />
            </Collapse>
            <Collapse isOpen={this.state.showCdInfo}>
              <CampusInfoCard campusInfo={this.state.cdCampusInfo} />
            </Collapse>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Contact;
