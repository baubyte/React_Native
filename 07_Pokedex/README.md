## Cambiar Nombre Aplicacion
    
-   Se debe cambiar 
[modificar el archivo](./android/app/src/main/res/values/strings.xml) y cambiar la siguiente linea:
```
<string name="app_name">NombreAPP</string>
```
## Cambiar icono Aplicación
-   Se deben cambiar todos los archivos que se encuentran [res](./android/app/src/main/res) de las carpetas 
    -   mipmap-hdpi
    -   mipmap-mdpi
    -   mipmap-xhdpi
    -   mipmap-xxhdpi
    -   mipmap-xxxhdpi
-   Herramienta simple para generar [Icons-Launcher](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=1&foreground.space.pad=0.15&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(240%2C%204%2C%204)&crop=0&backgroundShape=circle&effects=elevate&name=ic_launcher_round)

## Generar Splash Screen
-  [Paquete Usado](https://github.com/crazycodeboy/react-native-splash-screen)
    -   Seguir los paso de la Documentación 
    -   Pasos [1](https://github.com/crazycodeboy/react-native-splash-screen#1), [2](https://github.com/crazycodeboy/react-native-splash-screen#2) y [Third step(Plugin Configuration)](https://github.com/crazycodeboy/react-native-splash-screen#third-stepplugin-configuration)
    -   Luego pasar al Getting started y generar un splash conviene usar Android Studio
    -   Generar la configuración de colores en [values](./app/src/main/res/values/colors.xml)
    -   Por ultimo pasar al [Usage](https://github.com/crazycodeboy/react-native-splash-screen#usage)