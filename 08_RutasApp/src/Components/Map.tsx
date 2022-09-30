import React, {useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

interface Props {
  markers?: typeof Marker[];
}

export const Map = ({markers}: Props) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      error => console.log({error}),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return (
    <>
      <MapView
        style={{flex: 1}}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          image={require('../assets/customMarker.png')}
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Titulo Marker"
          description="Descripción Marker"
        /> */}
      </MapView>
    </>
  );
};
