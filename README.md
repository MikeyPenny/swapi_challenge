## About this project

For the Elsevier Funding Institutional Team coding challenge, we want you to create a web application. This is not a pass or fail test, but it is intended to provide a shared basis for discussion in the technical interview. You can choose how little time you want to spend; however, we ask you to limit yourself to a maximum of 3 hours on this assignment. This means you will have to make decisions on what to do. In general, we value code quality and demonstration of programming logic over the number of features added to the application.

## Requirements

-   Please use React.js for your implementation
-   Build a web application that uses the Star Wars API (https://swapi.dev/). Please do not use any external API wrapper libraries.
-   A README file to explain steps to execute the application
-   Please submit the code in a zip file or share the link to the repository (e.g., GitHub, Bitbucket, …).

## Functionality

-   Build a search for the users to search through the list of available Star Wars movies. Please decide on which details are relevant to the user.
-   Allow users to view characters of the chosen movie. Please choose the details you think are relevant to the user.
-   Users should be able to share the link, in any way – not necessarily through the application, with a different user. It is expected that the link navigates the receiving user to the page with correct results displayed, preserving the state of the page.
-   You have freedom to make decisions on the UI/UX of the application.
-   Bonus: Please provide an auto complete feature for the search.
-   Feel free to use UI libraries like, Bootstrap, Tailwind - but not required

## `npm install`

After cloning this repository run `npm install` to download and install the dependencies for this project.

Then you can run `npm start` to start the app. This app was bootstraped with create-react-app you can see more details below.

## Tech debts and improvements

-   Animations
-   Autocomplete doesn't feel entirely ok, with some more time I can make it better but I had to take
    in considertaion the time for this challenge.
-   Error handlers and redirection
-   Check unnecessary component rendering
-   Add images dynamically, the UI feels empty without the images, with more time I would add images to
    the films
-   Add a function to add more movies and star wars series not listed in the API
-   Context for the FilmDetails component
-   User's feedback (Spinners, Tooltips, etc.)
-   When the button to share the link is pressed, maybe we can build some embeded code like spotify and give a nice UX to the user. For now the link is copied to place it in the body of an email, message, post, etc.
-   Tests
    -   App loads without erros
    -   The list of Films is equal to the elements in the response
    -   The Film item has title, Subtitle, opening crawl and a button and this is not empty
    -   The Film details for title, subtitle, director, is not empty
    -   The TableComponent loads without errors
    -   The number of characters in the table is equal to the number of characters in the response
    -   When the button to share is pressed the copied url matches the film details url

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
