import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});
  //Colores
  let primaryColor, secondaryColor;

  switch (colors.platform) {
    case 'android':
      primaryColor = colors.dominant;
      secondaryColor = colors.average;
      break;
    case 'ios':
      primaryColor = colors.primary;
      secondaryColor = colors.secondary;
      break;
  }
  return [primaryColor, secondaryColor];
};
