import React from 'react';


export default class InfoWindow extends React.PureComponent {

  render() {
    const infoWindowStyle = {
      position: 'relative',
      bottom: 150,
      left: '-45px',
      width: 220,
      backgroundColor: 'white',
      boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
      padding: 10,
      fontSize: 14,
      zIndex: 100,
    };
    return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
      {this.props.place.name}
      </div>
      <div style={{ fontSize: 16 }}>
      {this.props.place.vicinity}
      </div>
    </div>
    );
  }
}