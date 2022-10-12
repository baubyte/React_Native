import {useEffect, useState, useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../Interfaces/appInterfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [routeLines, setRouteLines] = useState<Location[]>([]);
  const [initialPosition, setInitialPosition] = useState<Location>();
  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });
  const watchId = useRef<number>();
  const isMounted = useRef<boolean>(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getCurrentLocation().then(location => {
      if (!isMounted.current) {
        return;
      }
      setInitialPosition(location);
      setUserLocation(location);
      setRouteLines(routes => [...routeLines, location]);
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
        if (!isMounted.current) {
          return;
        }
        const location: Location = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
        setUserLocation(location);
        setRouteLines(routes => [...routeLines, location]);
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
    routeLines,
  };
};
