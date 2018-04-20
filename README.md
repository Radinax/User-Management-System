# USER MANAGEMENT SYSTEM

## Introduction

This is a User Management System aplication which lets you do the following: 

- You can add a group with the name you want.
- You can add a user with any name you wish to an existing group.
- You can remove a user from the group.
- You can remove a group if there aren't any users on it.
- You can change the group and user name.
- You can watch a list of existing users and groups.

But you can't:

- Create a user without assigning it to a group first.
- Remove a group if it has users on it.

This aplication was made using React JS with Redux to manage the global state. The CSS was handled with the framework BULMA CSS which is perfect for web aplications and works well with React, if you need to edit something you just go into the Assets folder and edit the scss file.

## Folder Distribution

The workflow I currently use is as follows:

- node_modules
- public
  - index.html
- src
  - actions
    - createGroup.js
    - createUsers.js
    - groups.js
    - users.js
  - Assets
    - css
      - default.min.css
    - scss
      - default.scss
  - components
    - dashboardComponent
      - dashboard.js
  - images
  - pages
    - createGroups.js
    - createUsers.js
    - editGroups.js
    - editUsers.js
    - groups.js
    - homepage.js
    - users.js
  - reducers
    - combineReducers.js
    - groups.js
    - users.js
  - App.js
  - index.js
- gulpfile.js

In the gulpfile I basically transform my scss file into css.

## Functionality of Redux with React in this aplication

The design is simple, a dashboard on the left where the user can go to the respective page to either check/edit the list of users/groups or add new ones. Redux was used because I had different pages that relied on different states that needed to be shared across the aplication, if not I would need to have used Backend, but its great that Redux exists to manage state in such an easy way.

For those who don't know about Redux is pretty simple, it consists of ACTIONS (gives you the orders) which are sent to the REDUCERS (says exactly what to do with those orders) that will be inside a STORE. The actions used were to ADD USER/GROUP, EDIT USER/GROUP and REMOVE/USER/GROUP, on the reducers I created two states with the following format:

- USER STATE: [{
  name: 'Adrian Beria',
  groups: [{id:1}]
}]

- GROUP STATE: [{
  id: 1,
  name: 'Web Developer'
}]

Knowing how to structure your states is crucial to use Redux in an efficent way, I relied on Arrays Methods because of all the options they have to control the data the user is managing.

## How to use this aplication

Start by cloning or downloading the project, then:

```
npm install
```

To set the respective modules used. 

```
gulp
npm start
```

So you can use the aplication in development mode. Writting "gulp" on the terminal sets the scss transition into css (you can add any other useful tasks you want as well) while watching any changes made so when you save it repeats the task once again and "npm start" just starts the app.

If you want to use this project in a website use:

```
npm run build
```

## Closure

This was my first aplication using Redux, I have experience working with React but with simple states, this time I had to use Redux and it was a complete pleasure, it provides an easy to use system that makes everything easier. It took me nearly 10 hours since I had to go through the Redux documentation while I was creating this aplication.

**Made by Adrian Beria.**

**React js Front-End Web Developer.**
