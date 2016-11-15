[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
# Parking Widget

## Boilerplate Features

- Uses JSPM to manage packages
- Transpiles ES6+ using [Babel](https://babeljs.io/) via JSPM
- Uses [SystemJS](https://github.com/systemjs/systemjs) to load modules via JSPM
- SASS compilation using [LibSass](http://libsass.org/) and [Autoprefixer](https://github.com/postcss/autoprefixer)
- Local dev server with [LiveReload](http://livereload.com/) using [Gulp Connect](https://github.com/avevlad/gulp-connect)
- Testing using [Karma](http://karma-runner.github.io/) with [Mocha](http://mochajs.org/) + [Chai](http://chaijs.com/) 
- Linting with [ESLint](http://eslint.org/) and [SCSS-Lint](https://github.com/brigade/scss-lint)

## Usage

1. Clone this repo from `https://github.com/valeriopisapia/parking_widget.git` or install via npm: `npm install https://github.com/valeriopisapia/parking_widget.git`
2. Run `npm install` in the root directory (will automatically run `jspm install`)
3. Run `gulp` or `npm start` to start the local dev server (you may need to install Gulp locally using `npm install -g gulp`)

## Testing (TO-DO)

Run `karma start` or `npm test` to run tests once.

Run `npm run test:watch` to run tests continuously.

## Building

Run `gulp build` or `npm run build` to build the app for distribution in the `dist` folder.

---
