# Nextjs sample project

Hi ! This is an example project using 'Next Js', 'React Js' with Typescript. All information below was based on [**Next.js by Vercel**](https://nextjs.org/) tutorials.

## Creating the project manually

Use the command line below to create `package.json`

```bash
yarn init -y
```

Open `package.json` and add the following `scripts`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

Install `next`, `react` and `react-dom` in your project:

```bash
yarn add next react react-dom
```

Install [TypeScript](https://www.typescriptlang.org/) how it depended on development

```bash
yarn add -D typescript @types/react @types/react-dom @types/node
```

Create the 'pages' folder with the files '\_app.tsx' and 'index.tsx'

```jsx
//-> pages/_app.tsx
import { ReactElement } from 'react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default App;
```

```jsx
//-> pages/index.tsx
import { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  return <div>Hello Nextjs 👋</div>;
};

export default HomePage;
```

Then run 'yarn dev' and Next.js will create two files 'tsconfig.json' and next-env.d.ts

```bash
yarn dev
```

## Installing react-boostrap

```bash
yarn add react-bootstrap bootstrap sass
```

```bash
yarn add -D @types/react-bootstrap
```
