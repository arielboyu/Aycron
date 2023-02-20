import React, {useState, useEffect} from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  DirectionsRenderer,
} from '@react-google-maps/api';
import Geocode from 'react-geocode';
import {getDistance} from 'geolib';
import {useSelector} from 'react-redux';
Geocode.setApiKey ('AIzaSyARa8bl_UNaChrB0ofxXJ6IC2xflGNl638');
Geocode.setRegion ('es');
Geocode.setLocationType ('ROOFTOP');
Geocode.enableDebug ();

const containerStyle = {
  width: '1200px',
  height: '560px',
};

const Map = ({adress}) => {
  const [directionsResponse, setDirectionsResponse] = useState (null);
  const [adminLocation, setAdminLocation] = useState ({});
  const [marker, showMarker] = useState (false);
  const stores = useSelector (state => state.stores);
  const {isLoaded} = useJsApiLoader ({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyARa8bl_UNaChrB0ofxXJ6IC2xflGNl638',
  });

  const setLocation = ubication => {
    return getDistance (adminLocation, ubication);
  };
  for (let i = 0; i < stores.length; i++) {
    stores[i].distance = setLocation (stores[i].position);
  }
  let orderByDistance = stores.sort ((a, b) => a.distance - b.distance);
  for (let i = 0; i < orderByDistance.length; i++) {
    orderByDistance[i].id = orderByDistance.indexOf (stores[i]);
  }

  useEffect (
    () => {
      const google = window.google;
      if (google) {
        const {city, street, number} = adress;
        Geocode.fromAddress (city + ' ' + street + ' ' + number).then (
          response => {
            const location = response.results[0].geometry.location;
            setAdminLocation (location);
          },
          error => {
            console.error (error);
          }
        );
        const directionsService = new google.maps.DirectionsService ();
        directionsService
          .route ({
            origin: adress.city + adress.street + adress.number,
            destination: orderByDistance[0].position,
            travelMode: window.google.maps.TravelMode.DRIVING,
          })
          .then (results => setDirectionsResponse (results));
      }
      setTimeout (() => {
        showMarker (true);
      }, '2000');
      return;
    },
    [adress, orderByDistance]
  );

  return isLoaded
    ? <GoogleMap
        style={{marginLeft: '100px'}}
        mapContainerStyle={containerStyle}
        zoom={6}
      >
        <div>
          {marker
            ? <div>
                {orderByDistance &&
                  orderByDistance.slice (0, 3).map (({id, position}) => (
                    <InfoWindow key={id} position={position}>
                      <div
                        style={{
                          backgroundColor: 'red',
                          width: '30px',
                          color: 'white',
                          fontSize: '20¿px',
                        }}
                      >
                        <p>{id + 1}</p>
                      </div>
                    </InfoWindow>
                  ))}
              </div>
            : ''}
        </div>
        {directionsResponse &&
          <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
    : '';
};

export default React.memo (Map);
