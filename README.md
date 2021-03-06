# **PoC Angular + PWA + Ngrx + Formly + Router State + NgRx-Entity**

## Table of Contents

- [Quick Start](#quick-start)
- [Description](#description)
  - [NgRx/RxJS Utils](#ngrx/rxjs-utils)
- [Code scaffolding](#code-scaffolding)
- [Contact](#contact)

## **Quick Start**

1. Run `npm i`
2. Run `npm run start`

## **Description**

PoC para atSistemas de un proyecto Angular con:

**Angular Core**

- **Modulos Core y Shared**
- **Lazy Loading Features**
- **Container/Presentational Components** (Smart/Dumb Components)
- **Formly** para generación de formularios dinámicos
- **Rendimiento** con el uso de trackBy, OnPush, Intersection Observer...

**State Management**

- **NgRx** como State Management
- **NgRx Entity** para el tratamiento de entidades dentro de NgRx
- **NgRx Router State** para manejar el estado de la App a partir del Router en NgRx
- **Forms conectados a NgRx** para evitar el uso de acciones, manejar los formularios desde NgRx y filtros por queryParams automáticos
- [**NgRx/RxJS Utils**](#ngrx/rxjs-utils) para manejar la información de el Router y los Formularios desde NgRx
- [**Good Actions Hygiene**](https://www.youtube.com/watch?v=JmnsEvoy-gY) para pensar las acciones como eventos ([Source] Event), no como comandos
- [**ngrx-store-localstorage**](https://github.com/btroncone/ngrx-store-localstorage) para guardar o recuperar partes del estado desde el localStorage. Rehidratamos contenido de NgRx (Cache)

**Other**

- **Prefetch Directive** para precargar información cuando un componente se le pase el ratón por encima o se muestre por pantalla
- **Auto Lazy Load Images Directive** para añadir automáticamente el lazy load a las imágenes si el navegador lo soporta
- **Dialog Util** para crear automáticamente diálogos de confirmación, alerta o con un componente en él
- **HttpClient Loading Wrapper** para automatizar la muestra de spinner en ciertas llamadas backend
- **Husky y lint-staged** para pasar lint y prettier a código cambiado al hacer commit
- **Commitlint** para usar [Convetional Commits](https://www.conventionalcommits.org/)

### **NgRx/RxJS Utils**

#### **ofRoute**

TODO

```javascript
// TODO
```

#### **ofSubmitForm**

TODO

```javascript
// TODO
```

#### **ofUpdateForm**

TODO

```javascript
// TODO
```

#### **fromStore**

TODO

```javascript
// TODO
```

#### **untilDestroyed**

TODO

```javascript
// TODO
```

## **Code scaffolding**

```bash
# Crear Feature Lazy
> ng g module features/(nombre-feature) --module app --route (nombre-ruta)

# Añadir Data-Access a Feature
> ng g module features/(nombre-feature)/data-access-(state-name) --module features/(nombre-feature-padre)
> ng g feature features/(nombre-feature)/data-access-(state-name)/+state/(StateName) -m features/(nombre-feature)/data-access-(state-name) --creators --api
> ng g service features/(nombre-feature)/data-access-(state-name)/services/(service-name)
> ng g interface features/(nombre-feature)/data-access-(state-name)/models/(model-name) model

# Añadir Data-Access a Shared
> ng g module shared/data-access-(state-name) --module shared
> ng g feature shared/data-access-(state-name)/+state/(StateName) -m shared/data-access-(state-name) --creators --api
> ng g service shared/data-access-(state-name)/services/(service-name)
> ng g interface shared/data-access-(state-name)/models/(model-name) model

# Misc
> ng g component features/(nombre-feature)/containers/(container-name)
> ng g component features/(nombre-feature)/components/(component-name)
> ng g service features/(nombre-feature)/services/(service-name)
> ng g interface features/(nombre-feature)/models/(model-name) model
```

## Contact

**Saúl Moro Gómez**
[smoro@atsistemas.com](mailto:smoro@atsistemas.com)
