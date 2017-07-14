# Chatterbox

### Objectives
Bloc Chat was developed to create an efficient online messaging platform. It was designed using AngularJS and Google’s Firebase database platform. It was designed based on the following use cases:
      As a user, I want to:
* see a list of available chat rooms
* create chat rooms
* see a list of messages in each chat room
* set my username to display in chat rooms
* send messages associated with my username in a chat room

### Technologies Used
Relevant technology utilized in creating this app include: Angular & Firebase. Angular’s front-end framework was chosen because it is a great option for building single page applications and because of it’s two-way data binding. This two-way data binding allows for automatic synchronization of data, revealing user-based changes to model data in real time through the view. Firebase was chosen because it is a great back-end foundation for a scalable network application and provides an API to easily store and sync data in a database.

### Implementation Highlights
* Injected a Firebase service into an Angular controller
* Used Firebase JavaScript and AngularFire APIs
* Queried a Firebase array
* Used UI Bootstrap Modal plugin
* Used cookies to store user’s information in the web browser

## Bloc Frontend Project Starter

Chatterbox is based off Bloc-chat, a starter application for student projects in Bloc's [Frontend Web Development Course](https://www.bloc.io/frontend-development-bootcamp).

## Configuration

The project uses Node to run a JS server in development. This will be important when we want to use urls /album or /collection instead of the basic album.html or collection.html. It may  help to review [our resource on NPM and `package.json` files](https://www.bloc.io/resources/npm-and-package-json).

Install the project dependencies by running:

```
$ npm install
```

Run the application server:
```
$ npm start
```

## Directory Structure

```
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── bloc-logo-white.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```

### Difference between Pages and Templates

The `templates` directory should hold any HTML files used as templates in Angular states configured by UI Router. All other HTML files belong in the `pages` directory.
