import React, { Component } from 'react';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';

import CampusInfoCard from '../core/CampusInfoCard';

import { getCampusImages } from '../core/utils';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      showBpInfo: true,
      showDiInfo: false,
      showCdInfo: false,
      bpCampusInfo: {
        image: 'loading...',
        title: 'Ballast Point Campus',
        address1: '5101 Bayshore Boulevard',
        address2: 'Tampa, Florida 33611',
        service1: '9:15 a.m. - Blended Service',
        service2: '11:00 a.m. - Modern Service',
      },
      diCampusInfo: {
        image: 'loading...',
        title: 'Davis Islands Campus',
        address1: '97 Biscayne Avenue',
        address2: 'Tampa, Florida 33606',
        service1: '10:30 a.m. - Modern Service',
      },
      cdCampusInfo: {
        image: 'loading...',
        title: 'Channel District Campus',
        address1: '1120 E. Kennedy Boulevard, #151',
        address2: 'Tampa, Florida 33602',
        service1: '11:00 a.m. - Modern Service',
      },
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggle() {
    const allMediaUrl = 'http://stfchurch.com/wp-json/wp/v2/media';

    this.setState({ show: !this.state.show });

    getCampusImages(allMediaUrl).then(images => {
      if (images !== undefined) {
        images.forEach(img => {
          if (img.id === 20953) {
            this.setState({ diCampusInfo: { ...this.state.diCampusInfo, image: img.source_url } });
          } else if (img.id === 20952) {
            this.setState({ cdCampusInfo: { ...this.state.cdCampusInfo, image: img.source_url } });
          } else if (img.id === 20951) {
            this.setState({ bpCampusInfo: { ...this.state.bpCampusInfo, image: img.source_url } });
          }
        });
      }
    });
  }

  onChange(e) {
    if (e.target[0].selected) {
      this.setState({ showBpInfo: true, showDiInfo: false, showCdInfo: false });
    } else if (e.target[1].selected) {
      this.setState({ showBpInfo: false, showDiInfo: true, showCdInfo: false });
    } else if (e.target[2].selected) {
      this.setState({ showBpInfo: false, showDiInfo: false, showCdInfo: true });
    }
  }

  showCampusInfo() {
    if (this.state.showBpInfo) {
      return <CampusInfoCard campusInfo={this.state.bpCampusInfo} />;
    } else if (this.state.showDiInfo) {
      return <CampusInfoCard campusInfo={this.state.diCampusInfo} />;
    } else if (this.state.showCdInfo) {
      return <CampusInfoCard campusInfo={this.state.cdCampusInfo} />;
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
            <h4 style={{ marginBottom: 15 }}>Get in touch with us!</h4>
            <p style={{ marginBottom: 15 }}>
              Main Office:
              <a style={{ textDecoration: 'underline', marginLeft: 10 }} href="tel:+1-813-251-1515">
                813-251-1515
              </a>
            </p>
            <p style={{ fontSize: 16 }}>{this.state.diCampusInfo.address1}</p>
            <p style={{ fontSize: 16, marginBottom: 45 }}>{this.state.diCampusInfo.address2}</p>

            <p style={{ marginBottom: 5 }}>Select for campus info:</p>
            <select onChange={this.onChange} className="content-section-contact-campus-selector">
              <option>Ballast Point</option>
              <option>Davis Islands</option>
              <option>Channel District</option>
            </select>
            {this.showCampusInfo()}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Contact;
