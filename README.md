# landing-builder-vue

This is an example of a simple landing page builder using Vue 3, TypeScript and clean architecture.

There are two types of components: BuilderComponent, which is the component type (ej. Text, Image) and PageComponent, that is the component that will be rendered on the landing page.

And there are also two modules, one for the builder and one for consuming the json result. Consider every module as a "feature", the first one has everything related to build a landing page (types, repo, ui of the component forms, and use cases as getting all the available components), the second one has the logic to consume the result of building the page (types and the components that will render the output)

Demo [here](https://landing-builder-vue.vercel.app/) :)

### Run project locally

```sh
npm install
npm run dev
```
