# Fatbuffet App

Sistema de pedidos de comida online

## Instalación

Use estos comandos para instalar la aplicación:

- Instalar Angular CLI: `npm install -g @angular/cli`

- Clonar el repositorio: `git clone https://github.com/angelxehg/fatbuffet-app.git`

- Instalar dependencias: `cd fatbuffet-app` & `npm install`

- Iniciar servidor: `ng serve --open`

## Tests y calidad

Use estos comandos para ejecutar tests y verificar calidad del código:

- Code linting: `ng lint`

- Unit testing: `ng test`

- E2E testing: `ng e2e`

## VSCode debug

Configure VSCode para poder hacer debug

- Iniciar servidor sin abrir navegador: `ng serve --no-open`

- Crear archivo de configuración: `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

## Despliegue

Compila la aplicación en modo de producción. El directorio destino es `www`.

- Build with Angular: `ng build --prod`
