## 41 O-Authorization
This application that provides a link for a user to sign up/sign in using O-authorization through Google's OpenID. The user must click on the link at the home page and select a Google account to use for authentication.  Once the user has successfully signed in, the user will receive a token for Google's OpenID, which will allow the user information to be retrieved.  This information in then available for use in our app.

### Installation & Set-Up
Fork this repository and install on your machine using git clone. Switch to the lab-karen folder.

### FRONT-END
Navigate to the front-end folder. The following excerpt from the FRONT-END package.json file shows the required package dependencies. Install devDependencies with *npm i*.

"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-plugin-transform-object-rest-spread": "^6.26.0",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.24.1",
  "clean-webpack-plugin": "^0.1.18",
  "css-loader": "^0.28.10",
  "dotenv": "^5.0.0",
  "enzyme": "^3.3.0",
  "enzyme-adapter-react-16": "^1.1.1",
  "extract-text-webpack-plugin": "^3.0.2",
  "file-loader": "^1.1.9",
  "html-webpack-plugin": "^2.30.1",
  "jest": "^22.4.2",
  "node-sass": "^4.7.2",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "react-redux": "^5.0.7",
  "react-router-dom": "^4.2.2",
  "redux": "^3.7.2",
  "redux-devtools-extension": "^2.13.2",
  "sass-loader": "^6.0.6",
  "superagent": "^3.8.2",
  "uglifyjs-webpack-plugin": "^1.2.1",
  "url-loader": "^0.6.2",
  "uuid": "^3.2.1",
  "webpack": "^3.11.0",
  "webpack-dev-server": "^2.11.1"
},
Additionally, add the following scripts to your package.json file to run from the command line.

"scripts": {
  "test": "jest --verbose",
  "test:watch": "jest --watchAll",
  "build": "webpack",
  "watch": "webpack-dev-server --inline --hot"

### BACK-END
Navigate to the back-end folder. The following excerpt from the BACK-END package.json file shows the required package dependencies. Install devDependencies with *npm i*.

"devDependencies": {
  "eslint": "^4.16.0",
  "faker": "^4.1.0",
  "jest": "^22.1.4"
},
"dependencies": {
  "body-parser": "^1.18.2",
  "cors": "^2.8.4",
  "debug": "^3.1.0",
  "dotenv": "^5.0.0",
  "express": "^4.16.2",
  "mongoose": "^5.0.3"
}
Additionally, add the following scripts to your package.json file to run from the command line.

"scripts": {
  "start": "node index.js",
  "start:watch": "nodemon index.js",
  "start:debug": "DEBUG=http* nodemon index.js",
  "test": "jest -i",
  "test:watch": "jest -i --watchAll",
  "test:debug": "DEBUG=http* jest -i",
  "lint": "eslint .",
  "lint:test": "npm run lint && npm test",
  "start-db": "mkdir -p ./data/db && mongod --dbpath ./data/db",
  "stop-db": "killall mongod"


### Running the app
Open at less three tabs.

From the back end folder, start the Mongo DB by typing *npm run start-db*. Start the node server by typing *npm run start:watch*.
From the front-end folder, type *npm start watch* to start the webpack server. Open a browser tab and paste the appropriate localhost address there to interact with the app.
Once in the browser, click the link to proceed to Google sign-in.

Environment Variables:
backend:
.env file
```
PORT=3000
CLIENT_URL='http://localhost:8080'
API_URL='http://localhost:3000'
GOOGLE_OAUTH_ID=730670604769-c1un82pmavkdp46kk5geh2gtcalit41r.apps.googleusercontent.com
GOOGLE_OAUTH_SECRET=qH6M1odlWv1YN5f0BSV648JQ
```
frontend:
.dev.env file:
```
NODE_ENV=dev
API_URL="http://localhost:3000"
```
