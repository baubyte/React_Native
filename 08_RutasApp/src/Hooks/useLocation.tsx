import {useEffect, useState, useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../Interfaces/appInterfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [initialPosition, setInitialPosition] = useState<Location>();
  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });
  const watchId = useRef<number>();
  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location);
      setUserLocation(location);
      setHasLocation(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        error => reject({error}),
        {enableHighAccuracy: true},
      );
    });
  };
  const followLocation = () => {
    watchId.current = Geolocation.watchPosition(
      ({coords}) => {
        setUserLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      error => console.log({error}),
      {enableHighAccuracy: true, distanceFilter: 10},
    );
  };
  const stopFollowingUserLocation = () => {
    if (watchId.current) {
      Geolocation.clearWatch(watchId.current);
    }
  };
  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    userLocation,
    followLocation,
    stopFollowingUserLocation,
  };
};
