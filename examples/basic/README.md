# Basic example 

Component library based on [Fractal](http://fractal.build/).

## Develop

```
yarn start
```

## Lint

With npm:

```
npm run lint --silent
```

Or with yarn:

```bash
yarn lint
```

## Functional testing

In order to run the functional tests, you need a Sauce Labs account. If you
don't have a Sauce Labs account yet, [you can sign up here](https://saucelabs.com/beta/signup/OSS/None).

Then, configure the 2 environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`.
You can either create a local `.env` file from `.env.example` template or set
the variables manually.

Be sure that you have built the framework before running the tests:

```
yarn dist
```

Then you can run:

```
yarn test:functional
```

## Deploy to GitHub Pages

_To be executed from the master branch only._

First, make sure to have built the style guide with the framework with:

```
yarn dist
```

Then, you can type:

```
yarn gh-pages
```
