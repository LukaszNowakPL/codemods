# Codemods code example

This repository supports `Codemods` talk. Its aim is to show working example of codemod which performs changes over consumer codebase.

The repository contains two potential projects.

`library` contains code of frontend library which suppose to break api exposed. It also contains codemod example.

`consumer` contains code of application consuming the `library`.

The talk was performed during:

- [React Alicante](https://reactalicante.es/) lightning talk (29.09.2023)

## Commands available

`npm run install:all` installs all dependencies necessary to run examples.

`npm run codemods` runs `v2/breadcrumbs.js` codemod against `consumer` project.

Please note that it will perform changes over `BreadcrumbsSection` component, however, `EdgeCaseExample` component remain unchanged.

`npm run test:codemods` runs tests over codemods produced. 

## Presentation

The repository contains pdf presentations displayed during meetings. Please note the language prefix used on file's name.

## Contact

- [GitHub profile](https://github.com/LukaszNowakPL/)
- [Linkedin profile](https://linkedin.com/in/łukasz-nowak-533844101)
