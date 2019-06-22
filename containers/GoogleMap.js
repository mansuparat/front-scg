import React from 'react';
import Layout from '../components/Layout'
import GoogleMapComponent from '../components/GoogleMap'

class GoogleMap extends React.Component {
  constructor() {
    super();
    this.state = {
      key_google_api : 'AIzaSyDJVbkePROCadDMjDFMH_f1P_a5O4FXbiE',
      center: {lat: 13.8279156, lng: 100.5286286},
      zoom: 16,
      locations : [],
    }
  }

  async componentDidMount() {
    await this.Get_Data_Google_Map()
  }

  async Get_Data_Google_Map() {
    let newState = this.state
  var result = [];
  var result_center = [];
        await fetch('http://127.0.0.1:3333/google_map', {
          method: 'get',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
      })
      .then((res) => { if(res.status !== 200) 
          throw new Error(res.status);
          else return res.json();
        })
          .then(res => {
              for(var i = 0; i < res.length; i++)
              {
                if(i == 0)
                {
                    result_center.push({lat : res[i]['geometry']['location']['lat'], lng : res[i]['geometry']['location']['lng']})
                }
                result.push({id: i , lat : res[i]['geometry']['location']['lat'], lng : res[i]['geometry']['location']['lng'],show : false, place: res[i]})
              }
              newState.center = result_center[0]
              newState.locations = result
              console.log(newState.locations)
          })
          .catch((error) => {
              console.log('error: ' + error);
            });
            this.setState(newState)
    }


    onChildClick(index)
    {
      let newState = this.state
      for(var i = 0; i < newState.locations.length; i++)
      {
        if(newState.locations[i]['id'] == index)
        {
          newState.locations[i]['show'] = true
        }
        else
        {
          newState.locations[i]['show'] = false
        }
      }
      this.setState(newState)
    }

    

  render() {
    return (
        <div>
        <Layout>
        <GoogleMapComponent
        state = {this.state}
        onChildClick={(event) => this.onChildClick(event)}
        />
        </Layout>
        </div>
    )
  }
}


export default GoogleMap