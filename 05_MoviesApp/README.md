### Error y Posible Solución
[ISSUES GITHUB](https://github.com/software-mansion/react-native-screens/issues/1369)
1.  Cambiar android/build.gradle:
    ```
        buildscript {
                ext {
                    // ...
                    kotlin_version = '1.6.10' // <- agregar esta liena
                }

                dependencies {
                    // ...
                    classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version" // <- agregar esta liena
                    // ...
                }
            }
       ```


### Error Carrusel 
[ISSUES GITHUB](https://github.com/meliorence/react-native-snap-carousel/issues/923)
1.  Primero Instalar 
    npm i deprecated-react-native-prop-types@2.2.0
2. Cada que se instala un paquete hay que editar los archivos
```
    ./node_modules/react-native-snap-carousel/src/carousel/Carousel.js
    ./node_modules/react-native-snap-carousel/src/Pagination/Pagination.js
    ./node_modules/react-native-snap-carousel/src/Pagination/PaginationDot.js
    ./node_modules/react-native-snap-carousel/src/ParallaxImage/ParallaxImage.js
````
3. Cambiar
````
        import { ... ,ViewPropTypes } from 'react-native';
````
A
````
        import { ... } from 'react-native';
        import {ViewPropTypes} from 'deprecated-react-native-prop-types'; 
````


