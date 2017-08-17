This project was bootstrapped with [Create Inferno App](https://github.com/infernojs/create-inferno-app) then ejected to expose all configuration files and allow customizations.

Inferno-Habitat, at the moment, is a local dependency in `src/_inferno-habitat` until I manage to get a working npm package.

## Scripts

#### Dev server
Compiles and runs `main.tsx` and `public/index.html`.
```
> npm start
```

#### Build component
Compiles and packages `main.tsx` and `public/index.html`. Output in `/dist`.
```
> npm run build
```

#### Bundle self contained component (habitat)
Compiles as habitat bundle and packages `bundle.tsx` and `public/bundle.html`. Output in `/bundle`.
```
> npm run bundle
```

### Extra (self explanatory)
```
> npm run lint:ts
> npm run test
```

## To Do

- Cleanup unnecessary files and configurations
    - Abstract some webpack stuff into `webpack.common`

- Add support for:
    - Style linting
    - ~~SCSS~~
    - ~~Typescript~~

- Cleanup example component:
    - Styling
    - Include "output" props

- Production build
    - ~~Split packages for self contained and embeddable (maybe this is NPM's job?)~~
    - Packaging (NPM)?

- ~~Fix Jest's `document.getElementById` issue~~