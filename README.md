# NanoPlazos Client Webapp

## Requirements

* NodeJS 12+
* Yarn 1.20+
* Cypress standalone (optional)

## Installation

Open root folder and run `yarn install` command

then if required use ` npx install-peerdeps --dev eslint-config-airbnb` to update code style dependencies

## Run proyect

To start run `yarn dev` command, project will be available on `http://localhost:3000` and consecutive ports if default is used.

## Run tests on Cypress

To start Integration test run `yarn run cypress open` or `yarn run cypress:open`, cypress window will be launched.

> #### Common Problems
> * If Cypress Windows won't open at all, try to force installation with `./node_modules/.bin/cypress install --force` command

## Open Storybook Docs

To start Storybook docs run `yarn storybook` this will be available on `http://localhost:6006`

## Dev Dependencies Info

* [next.js](https://nextjs.org/docs)
  * this project is based in next framework refer to docs to know about folder structure and functionality
* [react hook form 7.x](https://react-hook-form.com/)
  * controls forms data validation
* [axios](https://axios-http.com/)
  * helper library for http requests
* [styled components](https://styled-components.com/)
  * styles for reusable components
* [Airbnb Style Guide](https://github.com/airbnb/javascript)
* [eslint](https://eslint.org/docs/rules/)
  * code standar validations
* [prettier](https://prettier.io/docs/en/options.html)
  * beautify code
* [cypress](https://www.cypress.io/)
  * end to end testing tool
* [Storybook](https://storybook.js.org/)
  * tool for write docs
* [React utils](https://github.com/streamich/react-use)
  * hooks for common operations
* [Joi](https://joi.dev/api/)
  * schema / data validation
* [Tao of react](https://alexkondov.com/tao-of-react/)
  * suggestions for clean and readable react use
* [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
  * suggestions for descriptive commit messages
* [clean code javascript](https://github.com/ryanmcdermott/clean-code-javascript)
  * suggestions for clean and readable javascript code
