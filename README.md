# API Blueprint Renderer

The APIb Renderer will take any .apib files that it finds in ./apib/ and render
them as HTML into the ./docs directory using
[aglio](https://github.com/danielgtaylor/aglio).

APIb Renderer will also run an express server at localhost:4000 to serve the
rendered HTML pages that reside in ./docs.

## API Blueprint Resources
- [apiary blueprint tutorial](https://apiary.io/blueprint)
- [apiblueprint.org](https://apiblueprint.org/)

## Installation

### Prerequisites
Before proceeding with the installation, NVM should be configured. At the time
of writing this, there are some dependancies that do not work with more
recent versions of Node.

Currently, all dependancies are functional with Node v0.12.6.

### Initialze NVM

Feel free to replace `apib` with an alternate environment name.

```
nvm install 12.0.6
nvm alias apib v12.0.6
nvm use apib
```

### Install gulp

```
npm install gulp@3.9.0
```

### Install APIb Renderer

```
npm install git+https://git@github.com/CypherSystems/apib-renderer.git
```

### Add local gulpfile.js

Each project requires it's own gulpfile for the gulp commands to work.
See the examples folder for a barebones gulpfile that can be used.

### Commands

- `gulp` is the default command. This will render the apib
files that are found in ./apib, start the express server (at http://localhost:4000)
to serve the HTML and continue to watch for changes in ./apib to render, and
 ./docs to automatically refresh the browser.

- `gulp apib` renders HTML from the files located in ./apib

- `gulp serve` starts express and runs the automatic browser refresh at localhost:4000
