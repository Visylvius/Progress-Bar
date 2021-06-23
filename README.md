# Progress Bar component

This Repository contains my attempt at a progress bar component.
The component itself is presentational in nature, the reason being that it should be resuable in multiple places, and if it maintained it's own state (I.E the percent), it would be far less resuable.

In terms of time, I wrote it in vanilla JS. But writing it in Typescript would've made the component far more opinionated, and easier to read than a JSDOC comments describing the prop types.

To make the render props as simple as possible, I have included the default values for all of the props in ProgressCircle. That way the only thing you need to keep track of would be the percentage value, which should be done in the parent component that renders the ProgressBar.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
