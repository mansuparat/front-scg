import React from 'react';

import {greatPlaceStyle, greatPlaceStyleHover} from './my_great_place_with_hover_styles.js';

import InfoWindow from './InfoWindow';

export default class MyGreatPlaceWithHover extends React.PureComponent {

  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;
    return (
       <div style={style}>
          {this.props.text}
          {this.props.show && <InfoWindow place={this.props.place} />}
       </div>
    );
  }
}