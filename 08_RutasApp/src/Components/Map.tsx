import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useLocation} from '../Hooks/useLocation';
import {LoadingScreen} from '../Screens/LoadingScreen';
import {Fab} from './Fab';

interface Props {
  markers?: typeof Marker[];
}

export const Map = ({markers}: Props) => {
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    userLocation,
    followLocation,
    stopFollowingUserLocation,
  } = useLocation();
  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  const centerPosition = async () => {
    const location = await getCurrentLocation();
    following.current = true;
    mapViewRef.current?.animateCamera({
      center: location,
    });
  };
  useEffect(() => {
    followLocation();
    return () => {
      stopFollowingUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) {
      return;
    }
    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
  }, [userLocation]);
  if (!hasLocation) {
    return <LoadingScreen />;
  }
  return (
    <>
      <MapView
        ref={element => (mapViewRef.current = element!)}
        style={{flex: 1}}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition!.latitude,
          longitude: initialPosition!.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => (following.current = false)}>
        {/* <Marker
          image={require('../assets/customMarker.png')}
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Titulo Marker"
          description="Descripción Marker"
        /> */}
      </MapView>
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={internalStyles.fab}
      />
    </>
  );
};
const internalStyles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
