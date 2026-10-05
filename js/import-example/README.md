# Install NPM Package

- Project

```bash
mkdir my-project

cd my-project
```

- Install

```bash
npm install keycode-js --save
```

- Add the script with type of importmap to `<body>`

```html
  <script type="importmap">
   {
    "imports": {
     "keycode-js": "./node_modules/keycode-js/dist/keycode.esm.js"
    }
   }
  </script>
```

- Add `type="module"` on your local script

```html
<script type="module" src="main.js"></script>
```

- Import the package on JavaScript

```js
import * as KeyCode from "keycode-js"

console.log("The key return", KeyCode.KEY_RETURN)
console.log("The key left alt", KeyCode.KEY_ALT)
```
