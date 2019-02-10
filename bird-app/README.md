# BirdApp

Simple but cool react app that lets you add new observations of birds to the page. You can add pictures, videos, sound, tell the rarity of the bird and make notes.

You can use the app here: https://bird-app-database.firebaseapp.com/

## Installation

Clone BirdApp repo (example: git clone https://github.com/TeemuTenkanen/BirdApp.git) to your own device and use npm install command to configure all the packages to your project.

It will install react, react-dom, React-router-dom, bootstrap and firebase that you need in this project.

(Make sure you are on your project directory)


## API Reference

I used Open weather map api to get city name from longitude and latitude and firebase api for hosting my project and handling the data storaging.

Open weather map api: https://openweathermap.org/api

Firebase api: https://firebase.google.com/docs/web/setup 

You need your own api keys if you want to do your own project. You can get them from sites above.

## How to use

After you have done the installation step you can start you project with npm start. This open new page to localhost:3000
where you project will launch.

If you get error try npm install.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm deploy firebase`

Deploys build to the firebase host server.


