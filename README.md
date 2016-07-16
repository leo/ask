# ask

This package is perfect for asking the users of your command line interface to provide a certain kind of information that's needed to continue with execution.

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Transpile the source code and watch for changes: `npm start`
4. Within the module you want to test your local development instance of ask, just link it to the dependencies: `npm link ask`. Instead of the default one from npm, node will now use your clone of ask!

As always, you can run the [AVA](https://github.com/sindresorhus/ava) and [ESLint](http://eslint.org) tests using: `npm test`
