### Error y Posible Solución
[ISSUES GITHUB](https://github.com/software-mansion/react-native-screens/issues/1369)
1.  Cambiar
    In my android/build.gradle file i change this:

buildscript {
    ext {
        // ...
        kotlin_version = '1.6.10' // <- add this line
    }

    dependencies {
        // ...
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version" // <- add this line
        // ...
    }
}


### Error Carrusel 
[ISSUES GITHUB](https://github.com/meliorence/react-native-snap-carousel/issues/923)
1.  Primero Instalar 
    npm i deprecated-react-native-prop-types@2.2.0
2. Cada que se instala un paquete hay que editar los archivos
    +1
    open files
    ./node_modules/react-native-snap-carousel/src/carousel/Carousel.js
    ./node_modules/react-native-snap-carousel/src/Pagination/Pagination.js
    ./node_modules/react-native-snap-carousel/src/Pagination/PaginationDot.js
    ./node_modules/react-native-snap-carousel/src/ParallaxImage/ParallaxImage.js

    edit

    import { ... ,ViewPropTypes } from 'react-native';

    to

    import { ... } from 'react-native';
    import {ViewPropTypes} from 'deprecated-react-native-prop-types'; 



