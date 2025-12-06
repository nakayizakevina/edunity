What is NPM & package.json ?

NPM

NPM is a tool that helps developers to access exteral labraries or tools such as ract if need in Js. NPM helps developers to install, share, manage and update JS packages, labaries, tools and frame works.

NPM consist of three main components

1.The Website: This is where the developers search for packages, read documentaions and check versions.

2.The CLI: This is a tool developers use in the terminal. It helps to install, delete and upgrade packages using commands such as npm install, npm run dev, npm update and npm unistall.

3.The NPM Registry: This works as the database where all packages are being kept and when the developer runs any command such as npm install, the npm conents with the Registry and pick a specif package a developer wants.

PACKAGE.JSON
Package.json is a configuratio file that stores information about the developers project. This file is automatically created when a developer sets up his/her environment.

It holds information such as;

1.Project Information
2.Dependencies
3.Dev dependencies
4.Script


What is Vite?
Vite is a build tool that helps in making the developers work easy and fast.Vite consist of tow major parts;

1.The dev server
This helps the developer to see/preview the work on the local environment/ browser and this is done by running the command npm run dev.

2.The build command
This run by the developer when he/she is ready to deloy the project.This command bundles up the files before sending them off. And this is done by running the command npm run build.



































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


