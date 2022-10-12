import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useLocation} from '../Hooks/useLocation';
import {LoadingScreen} from '../Screens/LoadingScreen';

interface Props {
  markers?: typeof Marker[];
}

export const Map = ({markers}: Props) => {
  const {hasLocation, initialPosition} = useLocation();
  if (!hasLocation) {
    return <LoadingScreen />;
  }
  return (
    <>
      <MapView
        style={{flex: 1}}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition!.latitude,
          longitude: initialPosition!.longitude,
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
