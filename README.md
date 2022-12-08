## Quick start

```
npm start
```

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [React Query](https://react-query.tanstack.com/overview)
- [Styled-Components](https://www.styled-components.com)
- [ESLint](http://eslint.org) to maintain a consistent code style
- Refer to `package.json` for more details

## NPM Scripts

- Start develop server: `$ npm start` or `$ npm run dev`
- Create production build: `$ npm run build`
- Start server: `$ npm run server`
- Run ESLint: `$ npm run lint`
- Run Typechecker: `$ npm run typecheck`

## Development Workflow

### Components

The components are separated in `common`, `modules`, `layouts` and `pages`.

- The `common` folder includes components are self-contained and can be used through the entire app
- The `modules` folder includes bundled components which depend on each other.
- The `layouts` folder includes components that should be used with the `Page.layout` prop. See [documentation](https://nextjs.org/docs/basic-features/layouts#with-typescript) (**note:** we use `layout` instead of `getLayout`)
- The `pages` folder contain the routes of the application. See [documentation](https://nextjs.org/docs/basic-features/pages)

### Static Assets

Any static assets, such as images and SVG, are now placed inside the `public` folder in their respective folder (i.e. `public/images` and `public/vectors`). Importing can be done simply by writing the relative URL (i.e. `/images/your-img.png`) in both CSS and JS. You can still import SVG files as a module

```ts
import PrimeIcon from 'vectors/icon.svg';
```
