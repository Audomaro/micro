

# Micro

WebApp con arquitectura de MicroFrontEnd.

## Estructura

Se compone de:

- WebApps
  - Host: aplicaciones que contiene las rutas para llamar a los MicroFronEnd; puerto de ejecución 50000.
  - Dashboard; puerto de ejecución 50001.
  - Admin; puerto de ejecución 50002.

- Modulos de UI
  - UiHeader: Header principal para la aplicación; puerto de ejecución de StoryBook 4400
  - UiNavBar: Barra de navegación para la aplicación; no implementado.
  - UiSideMenu: Menu lateral para la aplicación; no implementado.

## Tools

### NX

Hace uso de **Nx** (Extensión para code <https://nx.dev/using-nx/console>) esta es la que permite el desarrollo de MicroFrontEnd de forma sencilla.

### StoryBook

Storybook es una herramienta para crear componentes y páginas de interfaz de usuario de forma aislada. Agiliza el desarrollo, las pruebas y la documentación de la interfaz de usuario.

### Comandos

Ejecutar todas las apps

```bash
npx nx run-many --target=serve --all=true
```

Para ejecutar el Storybook de un proyecto:

```bash
npx nx run-many --target=storybook --projects=[Nombre]
```

> Nota: El nombre de los proyectos se encuentra en archivo **workspace.json**; se va actualizando por medio de **Nx** cada que se agregan o remueven proyectos.
