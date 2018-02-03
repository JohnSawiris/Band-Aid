# BandAid

#### A record collection management application _2018_

#### by **Tyler Bussanich**, **Mikey Pinaud**, **John Sawiris**, and **Adam Smith**

## Description

BandAid is a record collection management application. Users will be able to search for a band's records through the BandAid interface which utilizes the Discogs API. Users will be able to sign up for a profile with a name, email, and password. Users with a profile will be able to add records to their collection or wishlist. Users will be able to manage their collection and wishlist by adding and removing entries, or by moving entries from the wishlist to the collection. User will be able to look at an Artists page and see if they are currently touring which is being utilized by the Bands On Tour API.

## Setup/Installation Requirements

[View on web browser](https://iband-aid.firebaseapp.com/)

Clone or download repository:
  1. Open [this page](https://github.com/JohnSawiris/team-project) in web browser.
  2. Under the repository name, click Clone or download.
  3. In the Clone with HTTPs section, click to copy the clone URL for the repository.
  4. Open Terminal.
  5. Change the current working directory to the location where you want the cloned directory to be made (ex. cd desktop).
  6. Type git clone, and then paste the URL you copied in Step 3. (ex. git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY).
  7. Press Enter. Your local clone will be created.
  8. Go into directory by entering cd team-project in the terminal.
  9. Install all dependencies by entering npm install in the terminal.
  10. Open in your IDE.

## API Authorization

  1. Visit the [Discogs API](https://www.discogs.com/developers/) website.
  2. Click the 'Create an App' link on the top-right part of the page.
  3. Sign up for a free account or login.
  4. Click the green "Create an application" button and fill out the criteria for creating a new application.
  5. Get the "Consumer Key" and "Consumer Secret" values from the page.
  5. Create a new file in the "src/" directory of the project with the name "api-keys.ts".
  6. Finally add the following export statement to the file with your API key in the quotes. The key is already linked to an import statement in the application files so no other steps are necessary.

  ```
  export const masterDiscogsAuth = {
    key: "{{yourConsumerKeyHere}}",
    secret: "{{yourConsumerSecretHere}}"
  }
  ```

## Server Setup

  1. Visit the [Firebase](https://firebase.google.com/) website.
  2. Login with your Google account or create one if you don't already have one.
  3. Click the "Add project" button.
  4. Create a name for the project and click the "Create project" button.
  5. Click the "Database" tab in the menu on the left hand side of the page.
  6. Click the "Get Started" button to initialize your Firebase database.
  7. Click the "Project Overview" link at the top-left of the page.
  8. Click the "Add Firebase to your web app" button.
  9. Copy the apiKey, authDomain, databaseURL, projectId, and storageBucket key/value pairs.
  10. Finally add the following export statement beneath the api-keys export in the "api-keys.ts" file with your Firebase configuration properties where they belong. The configuration is already linked to an import statement in the application files so no other steps are necessary.

  ```
  export const masterFirebaseConfig = {
    apiKey: "{{yourApiKeyHere}}",
    authDomain: "{{yourAuthDomainHere}}",
    databaseURL: "{{yourDatabaseURLHere}}",
    projectId: "{{yourProjectIdHere}}",
    storageBucket: "{{yourStorageBucketHere}}"
  }
  ```

## Technologies Used:
* Angular 2
* JavaScript
* Bootstrap
* NPM
* Bower
* Angular CLI
* Firebase
* angularfire2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

Copyright (c) 2018, Tyler Bussanich, Mikey Pinaud, John Sawiris, and Adam Smith.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
