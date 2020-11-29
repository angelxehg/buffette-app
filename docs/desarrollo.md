# Configuración de desarrollo

Guía para clonar, instalar y trabajar en el software

## Instalación

Use estos comandos para instalar la aplicación:

- Instalar Angular CLI: `npm install -g @angular/cli`

- Clonar el repositorio: `git clone https://github.com/angelxehg/buffette-app.git`

- Instalar dependencias: `cd butteffe-app` & `npm install`

- Iniciar servidor: `ng serve --open`

## Tests y calidad

Use estos comandos para ejecutar tests y verificar calidad del código:

- Code linting: `ng lint`

- Unit testing: `ng test`

- E2E testing: `ng e2e`

## VSCode debug

Configure VSCode para poder hacer debug:

- Iniciar servidor sin abrir navegador: `ng serve --no-open`

- Lanza desde el menú de Debug en VSCode.

## Despliegue

Compila la aplicación en modo de producción. El directorio destino es `www`:

- Build with Angular: `ng build --prod`
