# Travel Planner

Welcome to Travel Planner! This app was created to help you keep track of any upcoming travel plans. I try to travel as much as possible, so organizng all my trip details in one place makes it easier to keep track of! You can add a trip with it's destination and dates and then create a packing list along with a list of things you would like to do while away (itinerary).

 This app has full CRUD functionality allowing you to create, read, update and delete any trip plus create and delete and list items you create (packing and itinerary).

This app has a Rails backend - you can find the github for it (here).
The frontend was created with React, Redux and uses Thunk.

Live Site: https://travel-plannerr.netlify.app/


## How to run the app:

There are 2 repos you need to run this app - backend and frontend.

Heres what to do:

1. Fork and clone the backend repo from this link: https://github.com/jesspesale/travel-planner-backendd

2. From the backend directory run the following commands:
    - bundle install
    - rake db:migrate
    - rails s

3. Fork and clone the frontend and run the following commands in the frontend directory in your terminal:
    - npm install
    - npm start (click yes if asks if you want to run on a different server)

Then the site should pop open in the browser

Or you can just go to the deployed site: https://travel-plannerr.netlify.app/


## Learn More

This app was built with the create-react-app command. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
