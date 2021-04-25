# TEST SUITE - unit tests with Mocha

Para poder ejecutar la aplicación:

`npm install`

`npm start`

Para ejecutar los tests:

`npm test`

## ¿Cómo testear la aplicación?

1. Instalar mocha, chai y chai-http
2. Añadir el script "test": "mocha --timeout 10000" en el package.json
3. En el archivo principal de la aplicación, donde se crea la aplicación Express, es necesario importar esta app para que pueda ser usada por los archivos de test
4. Crear la carpeta test en la raíz de la aplicación
5. Crear los archivos de test segun la sintaxis provista por Mocha y Chai. Un par de archivos de ejemplo son provistos en esta carpeta