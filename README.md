This last commit is only to explain through readme file what I've done.

1) So the first step was to analyze what the user will use from the UI. I was curious about how the Placeholder API works. I noticed that the <Categories> aren't available to fetch from it, so I tried to figure out how to simulate it with our current data.

2) Secondly, I fetched and retrieved all the data posts. I wanted to fetch two APIs at the same time, but I got stuck because the Splash API returned an error message. I retrieved their data by many attempts, but as my priority was to retrieve all the data to start to implement the rest of the functionalities, I changed from the Splash API to the Picsum API. After this change, I started coding without warnings.

3) So I've done our grid list, added React Router to navigate through views, and clicked on each post to see our individual post view, reusing our <Post View Component>.

4) I've created a fake category by assigning our current userId to a string, where this string will be "Travel | lifestyle | business | food | work". In this way, I was able to show a tag with a specific category. Since we don't have an auth component, I displayed our edit/edit icons only in posts where our userId was 1 (I set this value manually). In this way, these edition/delete functionalities will be available only if the Id matches with the userId on our post.

5) Once this was completed, I've done all the categories page. Our navigation bar is also done with React Router and works properly. My idea was to create a component that I can reuse, passing props, retrieve our userId, which was assigned in the previous step to a category, fetch our data, and finally use the filter function to show it. Unfortunately, I didn't get time to develop this component, but I reused our components from home only to simulate data.

6) I noticed that a modal will be used, so my idea was to create one through Portals. This modal will help in our add/delete/create actions. At this time, I used a modal from Bootstrap, but definitely, this needs to be developed with portals.

7) Our last actions, add/delete/create, I wasn't able to develop it for my remaining time. I really want to finish this app. Maybe it wasn't enough time for me, but I'm pretty sure that I can develop it.

______
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
