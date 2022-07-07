import shutil
 
fileFixCarousel = './fix/Carousel.js'
fileFixPagination = './fix/Pagination.js'
fileFixPaginationDot = './fix/PaginationDot.js'
fileFixParallaxImage = './fix/ParallaxImage.js'


fileToFixCarousel = './node_modules/react-native-snap-carousel/src/carousel/Carousel.js'
fileToFixPagination = './node_modules/react-native-snap-carousel/src/pagination/Pagination.js'
fileToFixPaginationDot = './node_modules/react-native-snap-carousel/src/pagination/PaginationDot.js'
fileToFixParallaxImage = './node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.js'

print('Fixing Carousel.js...')
shutil.copy(fileFixCarousel, fileToFixCarousel)

print('Fixing Pagination.js...')
shutil.copy(fileFixPagination, fileToFixPagination)

print('Fixing PaginationDot.js...')
shutil.copy(fileFixPaginationDot, fileToFixPaginationDot)

print('Fixing ParallaxImage.js...')
shutil.copy(fileFixParallaxImage, fileToFixParallaxImage)