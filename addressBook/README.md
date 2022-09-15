# AddressBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests and test-coverage

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## First time setup

### Install Node.js

Head over to the [Node.js downloads page](https://nodejs.org/en/download/) and install the correct version for your platform.

### Install dependencies

Once you have Node.js installed, run `npm install` from the root of the repository to install dependencies and development tools. Once the install is completed, the app is ready to be built, tested, etc. See the Angular CLI reference commands on how to complete various tasks using the Angular CLI tool. you can find a reference here: (https://angular.io/cli)

### Install ESlint

Run the following command:
ng lint <project> [options]
ng l <project> [options]
You can find documentation for ng lint here: (https://www.tutorialspoint.com/angular_cli/angular_cli_ng_lint.htm)

### About the AddressBook App

- Build the web front-end for the “Address Book” portion of the clients SaaS offering. Users are 70% mobile and 30%

### Requirements

- Your web client should display a list of people from the address book.
- The user should be able to select a person from the list in order to see more details about that person.

### API ENDPOINTS

Request a list of users
(https://randomuser.me/)

Documentation can be found at https://randomuser.me/documentation

- please use the seed ‘nuvalence’.

```

The application should do the following:
● Display a list of ten people from the address book
● Able to select a person from the list and navigate to the details page
● The detail page should display at least the first name, last name, and phone number

Find creative solutions using the following:
● Clean, readable, documented code
● Angular/React best-practices
○ Appropriate use of Components and Component hierarchy
○ Use of higher-order functions, function composition
○ Correct use of basic data structures and abstractions
○ Unit test coverage
○ TypeScript Types, small functions, good use of base types
● Page load optimizations (package size, minimizing requests, optimized images if any)
● Appropriate use of semantic HTML
● Considerations for accessibility
● Responsive page flows with multiple breakpoints

Bonus points for:
● Pagination
● Management of asynchronous/concurrent execution through high-level abstractions
● Use of more advanced manipulations (map, reduce, apply, etc.)
● Very high lighthouse scores for performance and accessibility
● Deployments to any cloud infrastructure
● More elaborate layout and use of images
● CSS Animations

Deliverables
Please take your time to deliver a quality solution that shows your ability. Include:
● A README file that contains:
○ Deployment / running instructions. If possible, assume that we’re running this on
a Mac
○ A summary of the assignment
■ Your overall approach
■ What features you’ve implemented
■ Given more time, what else would you have liked to complete and how
long would it have taken you? Or, what would be the next steps to
improve this implementation?
● Production-ready code that:
○ Is checked into a git repository and shared with us (Github, Gitlab, Bitbucket,
etc.). We should be able to run the code.
○ Has no debug logging
○ Implemented standard NPM controls (run, test, etc)
```

### Be explicit

Explicitly type everything your code interacts with, even if it feels verbose.

- All variables and functions should be typed public/private etc.
- All function return types should be explicitly typed, even if void.
- Make sure every object you touch is explicitly typed. Typing something as `any` is unacceptable without a good reason to do so.

```
// bad
myFunction(message) {
  alert(message);
}

// good
public myFunction(message: string): void {
  alert(message);
}
```

### Code ordering

Here are some specifics in order to keep code clean

// Vendor imports first
import \* as \_ from 'lodash';
import { Component, OnInit } from '@angular/core';

// Newline between vendor and internal imports
// Internal imports, shared imports listed first
import { Thing } from '@shared/things';
import { Foo, Bar } from './foobar';

export class MyClass implements OnInit {
// Angular decorators (@Input, @Output, @ViewChild, etc)
@Input(): foo: Foo;

// Public static variables
// Private static variables

// Public member variables
// Private member variables

constructor() { }

// ng lifecycle methods

// public static methods
// private static methods

```
Alphabetize variables, functions, imports etc. so that they will be easier to find.

```

### Casing

We mostly use camel case everywhere, with a few exceptions:

- TS type/interface/class names should be title case

```
class MyClass {}
public myFunction() {}
```

- CSS classes and IDs should be hyphen or spinal cased:

```
.my-css-class
```

## Review process

Before a PR (Pull Request), be sure to follow the checklist below.

- Build and run app
  - Build via `ng build` or `ng serve`
  - Open the application and make sure it boots
  - Check the browser's JavaScript console, make sure no runtime exceptions are being thrown
- The pull request must satisfy intended business requirements

  - Do a quick smoke test of the change/feature to see if it works as intended

- All automated tests must pass
  - Run 'npm run test' to run the test suite
  - All specs must pass
- All linter rules must be satisfied
  - Run 'npm run lint'
  - The linter should report zero issues
- Check Test-Coverage. It should be at least 80%

### Example rebase

git checkout master

// fetch latest changes to master from remote repo
git pull

// check out local source branch
git checkout awesome-feature

// begin the rebase
git rebase master

- if there are conflicts be caustious when resolving

```
Git will report which files contain conflicts that couldn't be resolved. Author must resolve the
conflicts in the affected files before the rebase can continue. Check out [this article](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) to learn about git merge conflicts and how to resolve them.
```

// stage unmerged changes with resolved conflicts
git add -A

// complete the rebase
git rebase --continue

```
Occasionally, more conflicts will arise when continuing the rebase. Keep resolving conflicts,
staging the changes, and continuing the rebase until it completes. Once complete, push the branch back
to the remote repository (TFS). Because the history of the branch has now changed because of the rebase,
TFS won't allow a normal `git push`. The push has to be forced, essentially replacing the remote branch
with the local branch. Be careful with this, only force push to your own personal feature branches.
_NEVER_ force push to public branches i.e. `master`.
```

git push origin awesome-feature --force

```
The associated pull request will update itself automatically and is now able to be merged.


```
