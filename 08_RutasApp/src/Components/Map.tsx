import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {useLocation} from '../Hooks/useLocation';
import {LoadingScreen} from '../Screens/LoadingScreen';
import {Fab} from './Fab';

interface Props {
  markers?: typeof Marker[];
}

export const Map = ({markers}: Props) => {
  const [showPolyLine, setShowPolyLine] = useState(true);
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    userLocation,
    followLocation,
    stopFollowingUserLocation,
    routeLines,
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
        {showPolyLine && (
          <Polyline
            coordinates={routeLines}
            strokeColor="black"
            strokeWidth={3}
          />
        )}
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
        style={internalStyles.center}
      />
      <Fab
        iconName="brush-outline"
        onPress={() => setShowPolyLine(value => !value)}
        style={internalStyles.polyline}
      />
    </>
  );
};
const internalStyles = StyleSheet.create({
  center: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  polyline: {
    position: 'absolute',
    bottom: 80,
    right: 20,
  },
});
