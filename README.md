## UNSPLASH VIEWER API  :camera_flash:

Solución al reto de front-end, Unsplash Viewer Api de [Nuwe](https://nuwe.io/). La finalidad del challenge es crear un aplicación donde se vea una galería de imágenes utilizando la API de [Unsplash](https://unsplash.com/).

**Objetivos cumplidos:**

 :white_small_square: Puede verse un layout de cards conectado a la API ✅
 
  :white_small_square: Mínimo 10-12 cards en 3 columnas, (se muestran 20 cards) ✅
* Si alguna de las palabras generadas aleatoriamente no tuviera resultados o tuviese menos de 12 imágenes en Unsplash, se obtiene de manera automatica una nueva keyword que cumpla con el requisito.
    
 :white_small_square: Al clicar en el botón se cargan nuevas fotos de forma aleatoria (se genera una palabra aleatoria utilizando el paquete npm random-word) ✅
 
  :white_small_square: Para asegurar que el título y subtitulo (palabra buscada y autor) se vean  bien, cada card tiene una sombra con mucha transparencia en negro (al hacer hover sobre la card la sombra desparece) . ✅
  
 :white_small_square: Es 100% funcional en mobile y se muestra una columna de imágenes ✅



## Demo  :sparkles:
[estefaniaderosa.github.io/random-image](https://estefaniaderosa.github.io/random-image/)


## Inicio :rocket:
Para comenzar a trabajar con el repositorio instalar los paquetes e iniciar la app:

1. Instalar:
> `npm i`  

2. Iniciar:
> `npm start`

##  Tecnologías utilizadas :woman_technologist:

 - [React](https://es.reactjs.org/)
 - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 - [CCS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
 - [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) 
 - [Axios](https://axios-http.com/)
 - [Random word ](https://www.npmjs.com/package/random-word)
 - [Unsplash API](https://unsplash.com/)
 
#Utilicé el hook useState de React para el manejo del estado local. CSS3 para la UI, Grid para el layout de columnas y Axios para consumir la API de Unsplash. Elegí el paquete random-word de npm para generar una palabra aleatoria cada vez que se haga click en el botón 'Search new images' y dispare la búsqueda en Unsplash.

## Estructura de carpetas :card_index_dividers:

 - :file_folder: public
	 - index.html
 -  :file_folder: src 
	 - App.js
	 - index.js
	 - index.css
	 -  :file_folder: components 
		 - Gallery.js
		 - Gallery.css


## Calidad de Código :white_check_mark:

 
