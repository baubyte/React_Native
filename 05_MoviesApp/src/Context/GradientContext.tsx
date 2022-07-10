import React, {createContext, useState} from 'react';

interface ImageColors {
  primaryColor: string;
  secondaryColor: string;
}
interface ContextProps {
  colors: ImageColors;
  previousColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setMainPreviousColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); //:TODO definir tipo

export const GradientProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const [colors, setColors] = useState<ImageColors>({
    primaryColor: 'transparent',
    secondaryColor: 'transparent',
  });
  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primaryColor: 'transparent',
    secondaryColor: 'transparent',
  });

  /**
   * Colores actual
   * @param mainColors
   */
  const setMainColors = (mainColors: ImageColors) => {
    setColors(mainColors);
  };
  /**
   * Colores anteriores
   * @param mainColors
   */
  const setMainPreviousColors = (mainColors: ImageColors) => {
    setPreviousColors(mainColors);
  };
  return (
    <GradientContext.Provider
      value={{
        colors,
        previousColors,
        setMainColors,
        setMainPreviousColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
