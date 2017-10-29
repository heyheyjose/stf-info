import React from 'react';

import './core.css';

const CampusInfoCard = props => {
  return (
    <div className="campus-info-card-wrapper">
      <img alt={props.campusInfo.title} src={props.campusInfo.image} className="campus-info-card-img" />
      <h4 className="campus-info-card-title">{props.campusInfo.title}</h4>
      <p className="campus-info-card-text">{props.campusInfo.address1}</p>
      <p className="campus-info-card-text">{props.campusInfo.address2}</p>
      <p className="campus-info-card-text">
        <strong>Service Times: </strong>
        {props.campusInfo.serviceTimes}
      </p>
    </div>
  );
};

export default CampusInfoCard;
