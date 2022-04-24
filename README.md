# Shoppeur

Self checkout app for web on mobile.

## Setup

To set up this project, run `npm install`.\
It is recommended to install [ngrok](https://ngrok.com/) for easier development on mobile.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

When accessing your development build through ngrok, make sure to use the URL containing `https` to enable camera usage in the browser.

### `npm run storybook`

Opens storybook at [http://localhost:6006](http://localhost:6006) with all of your components specified in `src/stories`.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run deploy`

Builds and deploys the app using Github Pages to the url specified in the home property in the package.json file, i.e. https://dkelsen.github.io/self-checkout-scan-app, where `https://{github username}.github.io/{repository name}`.

## Approach

### General

For simplicity and due to a lack of specifications by the client, the app is limited to two screens, a (shopping) cart and scanner.
Likewise, its functionality is kept as simple as possible with the addition and deletion of items.
Given the limited information, the barcode is not shown to the user inside the app as it is not deemed necessary to the user experience.

### Technical

For speed and prototyping, JavaScript is used instead of TypeScript. For an app of this scale, a simple router is used instead of React Router.
Scanned items are centrally managed in a context which improves scalability and the ease to hook up the data to a backend.
For styling, styled components was chosen out of familiarity and consequentially speed.
