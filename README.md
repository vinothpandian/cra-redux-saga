# React Redux Saga starter

React 16, Redux, Redux Saga, Redux Form, React Spring, Emotion, and Bootstrap. The demo retains typed name updates, asynchronous name loading, animated transitions, responsive navigation, and the package directory.

Requires Node.js 22.12+.

- `npm ci` or Yarn 1 `yarn install --frozen-lockfile`: install dependencies.
- `npm start`: start Vite at port 3000.
- `npm run test:run`: run regression tests once.
- `npm test`: watch tests.
- `npm run build`: generate `build/` for the `/cra-redux-saga/` GitHub Pages subpath.
- `npm run deploy`: build and publish the existing GitHub Pages branch using gh-pages.

Vite replaces Create React App. Emotion no longer needs the Babel macro, Bootstrap/Reactstrap are upgraded together, and Redux Saga and DevTools use their current packages. Hash routing preserves direct reloads on GitHub Pages. For a different deployment path, change the production base and PUBLIC_URL together in `vite.config.mjs`.

Service-worker registration remains disabled by default. The build generates an offline shell worker so the existing opt-in `serviceWorker.register()` remains available. Tests mock the existing uinames.com endpoint; live availability of that third-party API is not covered.
