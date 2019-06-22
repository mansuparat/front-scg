import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithHover from './my_great_place_with_hover';
import { K_SIZE } from './my_great_place_with_hover_styles';

const GoogleMap = (props) => (
    <div class="container-fluid">
  
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          onChildClick={(event) => props.onChildClick(event)}
          bootstrapURLKeys={{ key: props.state.key_google_api }}
          defaultCenter={props.state.center}
          defaultZoom={props.state.zoom}
          hoverDistance={K_SIZE / 2}
        >
				{props.state.locations.map((data, index) => (
      <MyGreatPlaceWithHover
        text={data.id + 1}
        lat={data.lat}
        lng={data.lng}
        show={data.show}
        place={data.place}
                />))}
        </GoogleMapReact>
				<style jsx global>{`
					body { 
						margin: 0;
					}
				`}</style>
      </div>
            </div>
  
  
          </div>
  )
  
  export default GoogleMap