import React, {createContext, useState} from 'react';
import {PermissionStatus} from 'react-native-permissions/dist/typescript/types';

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
  const askLocationPermission = () => {};
  const checkLocationPermission = () => {};

  const [permissions, setPermissions] = useState(permissionInitState);
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
