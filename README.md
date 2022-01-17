# Prueba Tecnica Sanitas - Aplicación Ionic - Babel

## Funcionamiento de la aplicación

Al iniciarse la aplicación se ejecuta el servicio para recoger las imagenes en el API indicado, estos datos se tratan para tener la estructura requerida y se genera un fichero json con esa información.
A continuacion se lee ese fichero para recoger los datos y pintarlos en la pantalla, mostrando la imagen y el texto.
En esa pantalla se presenta un buscador (permite buscar por el id de la imagen y su texto) y un boton de refrescar para gestionar los datos. 

## Instalación del proyecto y dependencias

Para poder ejecutar y compilar el proyecto, será necesario tener instalado:

- Node (compatible con Ionic v5)
- Ionic CLI

Adicionalmente, para la compilación de las aplicaciones, será necesario:

- Android: Android SDK Tools, Java JDK, Gradle. Mas información en https://ionicframework.com/docs/installation/android
- iOS: Xcode. Mas información en https://ionicframework.com/docs/installation/ios

Ejemplo de configuración válida para la compilación y ejecución de la aplicación:

```sh
$ ionic info

Ionic:

   Ionic CLI                     : 6.14.1 (/usr/local/lib/node_modules/@ionic/cli)
   Ionic Framework               : @ionic/angular 6.0.1
   @angular-devkit/build-angular : 13.0.4
   @angular-devkit/schematics    : 13.0.4
   @angular/cli                  : 13.0.4
   @ionic/angular-toolkit        : 5.0.3

Utility:

   cordova-res                          : 0.15.2
   native-run                           : 1.5.0

System:

   NodeJS            : v14.15.1
   npm               : 6.14.8
   OS                : macOS Big Sur
```

Para instalar las dependencias del proyecto, bastará con ejecutar el comando:
`npm install`

## Instrucciones para la compilación del código:

> Las dependencias del proyecto necesitarán estar instaladas. Es decir, el comando `npm install` deberá haber sido ejecutado previamente.

> Para compilar el proyecto en android se puede ejecutar el comando: `npm run platform:android`. Que construira el proyecto y abrirá Android Studio.

> Para compilar el proyecto en ios se puede ejecutar el comando: `npm run platform:ios`. Que construira el proyecto y abrirá Xcode.

## Plugins necesarios
  @capacitor/filesystem

Todos los plugins necesarios deberian instalarse al ejecutar el comando `npm install`

