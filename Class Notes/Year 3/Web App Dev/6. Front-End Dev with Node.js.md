### Highlight of the slide
Front-End = What the user can see and interact of a web
- Focuses on UX and UI

FE vs BE
- FE: User-facing (HTML, CSS, JS), handle UI-UX
- BE: Server-side logic and database (Node.js, Python), handle logic

Role of Node.js in FE Dev
- Automate task (bundling + minification)
- Package management using `npm`
- JavaScript as an unified language across FE + BE

Node.js as a Build Tool
- Webpack: Bundles JS + assets
- Parcel: Zero-config bundler
- Gulp: Automates repetitive tasks (minify CSS/JS)
Bundling? -> Reduce file size and load time

`npm`
- Default pacman
- Manage FE + BE libraries

Common FE libraries
- React
- Vue.js
- Angular
~~~ Installation
npm install react react-dom
~~~
Installed packages are written in `package.json`

### Hand-on project
Typical FE project structure
- `src/`: Source file (HTML, CSS, JS)
- `dist/`: Contains bundled files for production
- `node_modules/`: Installed npm packages
- `package.json`: Project metadata and dependencies

Getting started
```cmd
npm init // Create package.json
// npm will ask you several question
mkdir src dist // Create src/ and dist/ directories
```

HTML and JavaScript Setup:
- Create an HTML file (index.html) inside `src/`.
- Create a JavaScript file (app.js) inside `src/`.

Webpack
`npm install webpack webpack-cli --save-dev`
- Then create `webpack.config.js` in the root folder to define entry points and output files

Running and testing
- Bundle the project: `npm run build`
- Open `index.html`