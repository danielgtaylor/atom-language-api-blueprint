# API Blueprint Grammar for Atom

An Atom grammar for [API Blueprint](https://apiblueprint.org/), generated from the associated [Sublime Text plugin](https://github.com/apiaryio/api-blueprint-sublime-plugin). Install by searching for `API Blueprint` in the Atom preferences.

![API Blueprint Atom Screenshot](https://cloud.githubusercontent.com/assets/106826/7290957/fc6f6d7e-e93c-11e4-84d2-b61e8d59eb78.png)

## Updating

This grammar can be updated automatically whenever the associated Sublime Text plugin has been updated:

```sh
$ npm install
$ npm run build
$ git add grammars/apiblueprint.cson
$ git commit -m 'Updating ...'
$ apm publish minor
```
