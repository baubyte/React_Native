import React, {createContext, useEffect, useState} from 'react';
import {AppState, Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  request,
  PermissionStatus,
  openSettings,
} from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}
export const permissionInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const [permissions, setPermissions] = useState(permissionInitState);
  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') {
        return;
      }
      checkLocationPermission();
    });
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    switch (Platform.OS) {
      case 'ios':
        permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        break;
      default:
        //ANDROID
        permissionStatus = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        break;
    }
    if (permissionStatus === 'blocked') {
      openSettings();
    }
    setPermissions({...permissions, locationStatus: permissionStatus});
  };
  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    switch (Platform.OS) {
      case 'ios':
        permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        break;
      default:
        //ANDROID
        permissionStatus = await check(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        break;
    }
    setPermissions({...permissions, locationStatus: permissionStatus});
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        checkLocationPermission,
        askLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
