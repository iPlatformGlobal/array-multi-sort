<!-- TITLE/ -->

<h1>Array Multi Sort</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->

Array helper for soring array object on multiple key values with ordering

<!-- /DESCRIPTION -->


<!-- BADGES/ -->

<span class="badge-nodeico"><a href="https://www.npmjs.com/package/@iplatformglobal/array-multi-sort" title="Nodei.co badge"><img src="https://nodei.co/npm/@iplatformglobal/array-multi-sort.png" alt="Nodei.co badge" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/iPlatformGlobal/array-multi-sort" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/iPlatformGlobal/array-multi-sort/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/@iplatformglobal/array-multi-sort" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@iplatformglobal/array-multi-sort.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@iplatformglobal/array-multi-sort" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@iplatformglobal/array-multi-sort.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/iPlatformGlobal/array-multi-sort" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/iPlatformGlobal/array-multi-sort.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->


## Instalation
```
yarn add @iplatformglobal/array-multi-sort or

or

npm install @iplatformglobal/array-multi-sort
```

## Usage

Sorts an array against keys with defined order direction

```javascript
// Data to be sorted
const data = [{
  id: 1,
  name: 'Tester',
  age: 20,
}, {
  id: 1,
  name: 'Taster',
  age: 21,
}, {
  id: 1,
  name: 'Tester',
  age: 21,
}];

// Instructions for how to sort the data
const sortColumns = [{
  key: 'name',
  direction: 'ASC',
}];

arrayMultiSort(data, sortColumns)

```
## Testing

Testing is handled by `Jest` and the packages has the following commands setup

* `yarn test`
* `yarn test:watch`

## Contributing

All contributions are welcome, and can be done by cloning the repo and running `yarn install`.

Ensure there are no errors in the tests or linter and ensure your commit messages comply to the following format:

* break: COMMIT_MSG - Changing the code in a way that changes the other users would need to impiment it.
* feat: COMMIT_MSG - adding a new feature or capability to the helper.
* fix: COMMIT_MSG - any bugs or minor updates that fixes the existing code without adding or removing any capabilities.
* none: COMMIT_MSG - used for simple updates like documentation, aka NO code has changed.

There are git hooks configured to ensure commit message format as well as test and linter complience


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/iPlatformGlobal/array-multi-sort/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2017+ <a href="http://www.iplatform.com">iPlatform</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
