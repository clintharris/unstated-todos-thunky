### What is this?

An experiment/proof-of-concept that modifies the Redux [Todos example](https://github.com/reactjs/redux/tree/master/examples/todos) to use [Unstated](https://github.com/jamiebuilds/unstated) instead. 

### Dependency Notes

 - `parcel-bundler` allows us to use [Parcel](https://parceljs.org) to transpile and bundle the app. It comes with Babel.
 - `typescript` will transpile our TypeScript (`.ts` and `.tsx` files) to JavaScript. It is automatically used by Parcel.
 - `parcel-plugin-typescript` ([GitHub](https://github.com/fathyb/parcel-plugin-typescript)) augments Parcel's support for transpiling TypeScript. We are using it specifically to make Parcel aware of the `paths` and `baseUrl` settings in `tsconfig.json` so we can use path "aliases" to import _TypeScript_ modules (e.g., `import Foo from '@src/Foo'`). In other words, this makes it possible for the TypeScript compiler to resolve those paths.
 - `babel-plugin-module-resolver` ([GitHub](https://github.com/tleunen/babel-plugin-module-resolver#readme)) augments Babel's ability to import _JavaScript_ modules via path aliases (e.g., `import Foo from '@src/Foo'`). You have to configure the path aliases in `.babelrc`.
 - `postcss-modules`([GitHub](https://github.com/css-modules/postcss-modules)) is automatically used by Parcel to enable [CSS Modules](https://github.com/css-modules/css-modules). Note that it is configured via the the [Parcel-specific](https://en.parceljs.org/transforms.html#postcss) `.postcssrc` config file. Also note that we have a `types.d.ts` file that declares `.scss` files as modules to prevent TypeScript errors when we try to `import stuff from 'somefile.scss'` (i.e., treat an `.scss` file as a module).
 - `autoprefixer` ([GitHub](https://github.com/postcss/autoprefixer)) is automatically used by `postcss-modules` to add browser-specific selector prefixes to CSS files, per configuration in `.postcssrc`.
 - `node-sass` ([GitHub](https://github.com/sass/node-sass)) is automatically used by Parcel to generate plain CSS files from our `.scss` files.