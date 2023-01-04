# Monorepo Microfrontend

POC to show a tech-agnostic approach to building microfrontends

##### Base App built with React

### Microfrontends built with most popular frontend frameworks

<p float="left">
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="100" />
  <img src="https://preactjs.com/assets/app-icon.png" width="100" /> 
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="100" />
	<img src="https://www.solidjs.com/assets/logo-123b04bc.svg" width='100' />
	<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png' width='75' />
	<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png' width='100' />
</p>

### Installing

The following commands should be run in a supported shell (eg. bash)

1. Install yarn

```sh
npm i -g yarn
```

2. Install all dependencies

```sh
yarn install:all
```

### Running

1. Run all apps

```sh
yarn run:all
```

#### Viewing

The host app will start up on at `localhost:8080`, and all successive microfrontends on `8081` - `8086`
