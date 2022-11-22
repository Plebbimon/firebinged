# Firebinged
#### FireWatch case


## 1. Introduction
This is an application that lets you view data about forest fires using the FireWatch data.
The purpose of this application is to show the data in a user-friendly way, and to be able to order the data in different ways.
The application is built using the following technologies:

* React
  * Vite
  * Typescript
  * Mantine (UI)
* Firebase
  * Firestore
  * Hosting

Live example can be found here: https://firebinged.web.app/

The application autodeploys on push to the main branch.

## 2. Installation
To install the application, you need to have Node.js installed. You can download it from [here](https://nodejs.org/en/). After installing Node.js, you can install the application by running the following command in the root of the project:

```yarn install && yarn run dev```

## 3. Deployment
To deploy the application, you need to have Firebase CLI installed. You can install it by running the following command:

```npm install -g firebase-tools```

After installing Firebase CLI, you can deploy the application by running the following command in the root of the project:

```firebase deploy```

## 4. License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 5. Acknowledgments
* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Firebase](https://firebase.google.com/)
* [Firestore](https://firebase.google.com/docs/firestore)
* [Hosting](https://firebase.google.com/docs/hosting)
* [Mantine](https://mantine.dev/)


## 6. Notes
* The application is not fully responsive, and is best viewed on a desktop.
* Using Firebase is not something I would do again for this kind of application.
* The way data is stored in Firebase is also suboptimal.
* React, Vite and Typescript are great, and they make it easy to quickly build an application. 
* The same goes for Firebase, Firestore and Hosting, even though I had to do some pretty nasty filtering frontend-side to get the data to display correctly.
* Using Mantine is a pleasure, and it really cuts down on the amount of time it takes to build a somewhat decent UI.
Jumping straight into this, I considered opting for a Django backend or simply Node express.
I can't really say that I regret using Firebase, but I would probably have been better off with a more traditional backend.
One problem I quickly encountered, is Firebase's lack of support for complex queries, or even aggregations at all.
They are unecessarily complicated to do, and most operations require some form of Google Cloud Function integration.
#### Solution-wise, it satisfies the requirements:
* It is possible to add new data to the database.
* It is possible to view the data in a user-friendly way. (although this might be debatable)
* The data is persisted in a database.