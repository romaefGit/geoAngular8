# Maps Angular 8 [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/romaestradaflo)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

This web application works with Map Box in Angular 8, the funcionality allows to choose one location and watch the location on the map, also it shows some statistics with information from an API rest and this use Chart.js to make it possible, enjoy it, it works in mobiles and desktop devices. 

Special thanks go to:
- [Romario Estrada](http://www.romaef.com) for his nice develop.


## Table of Contents

* [Languages](#versions)
* [Quick Start](#quick-start)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Licensing](#licensing)


## Languages



| Bootstrap 4| Angular 8|
| --- | --- |
| [![Bootstrap 4](https://jquery-plugins.net/image/plugin/bootstrap-4-the-most-popular-html-css-and-js-library.jpg)]()  | [![Angular](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/300px-Angular_full_color_logo.svg.png)]()

## DEMO

You can see the demo working on the next link [geoAngular8](https://geoangular8.web.app/) and if you liked, give me a star on the [Respossitory](https://github.com/RomarioAugustoEstradaFlorez/geoAngular8) 

## Quick start

Create an account on [MapBox](https://docs.mapbox.com/help/how-mapbox-works/) and use your own APIkey that they will give you to use them services of maps.
- Open this file of stage `src/enviroments/enviroments.ts` and modify the next property: `mapBoxToken:'YOUR_API_map_box_KEY'`

- Open this file of production `src/enviroments/enviroments.prod.ts` and modify the next property: `mapBoxToken:'YOUR_API_map_box_KEY'`

Clone the repo: 
- `git clone https://github.com/RomarioAugustoEstradaFlorez/geoAngular8`

Clone the repo: 

The client in Angular will run at `port 4200` and the url to access is `http://localhost:4200`.

To start the client:
- `npm install`
- `npm start` or `ng serve` 

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## File Structure
Within the download you'll find the following directories and files:

```

├── client_angular/
|   ├── src/
|   |   ├── app/
|   |   |   ├── @core/
|   |   |   |  ├── services/
|   |   |   |  |   └── map.service.ts
|   |   |   |  └── components/
|   |   |   |  |   ├── map.component.css
|   |   |   |  |   ├── map.component.html
|   |   |   |  |   └── map.components.ts
|   |   |   ├── map-stats/
|   |   |   |  ├── map-stats.component.css
|   |   |   |  ├── map-stats.component.html
|   |   |   |  └── map-stats.components.ts
|   |   |   ├── components/
|   |   |   |  ├── sidebar/
|   |   |   |  └── component.module.ts
|   |   |   ├── dashboard/
|   |   |   ├── layouts/
|   |   |   |  ├── admin-layout/
|   |   |   |  |   ├── admin-layout.component.css
|   |   |   |  |   ├── admin-layout.component.html
|   |   |   |  |   ├── admin-layout.component.ts
|   |   |   |  |   ├── admin-layout.module.ts
|   |   |   |  |   └── admin-layout.routing.ts
|   |   |   ├── services/
|   |   |   ├── app-routing.module.ts
|   |   |   ├── app.component.html
|   |   |   ├── app.component.scss
|   |   |   ├── app.component.ts
|   |   |   ├── app.module.ts
|   |   |   └── app.routing.ts
|   |   ├── assets/
|   |   └── index.html
└── README.md
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:


| Chrome | Firefox | Edge | Opera |
| --- | --- | --- | --- |

## Licensing

Licensed under MIT

##### Social Media
#
Web Page: <http://www.romaef.com>

Twitter: <https://twitter.com/romaestradaflo>

Facebook: <https://www.facebook.com/romaef/>

Instagram: <https://www.instagram.com/romaef_/>