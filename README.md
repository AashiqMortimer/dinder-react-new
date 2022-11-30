Installaton instructions:

1) Clone the repository.
2) Navigate to 'dinder-react-new' in terminal (cd dinder-react-new).
3) Run 'npm install' to install necessary dependencies.
    - In the instance of any installation issues, run 'npm install --force'.
4) Run 'npm start' to execute application.


Repository explaination:

This repository communicates with the DinDer backend and the UserAuthentication repository, which are hosted on heroku, so they don't need to be running locally in order for this dinder-react-new repository to run.


Application limitations:

- We are using the free version of SpoonacularAPI for our recipe retreival API, so are limited to 150 calls per day. You will be alerted if this is the case via a pop-up message in the web app.
- We are using a free version of Heroku for both DinDer backend and userAuthentication, so the loading latency might be high.
- The User Authentication function is hosted in a separate Heroku app to the DinDer backend, via an iFrame, and does not communicate with the front   end, so any infomation (e.g. saved recipes, recipe preferences, dietary restictions) put into UserAuthentication is not passed to the DinDer frontend.
- To test different user functionalities, a placeholder exists in dinder-react-new > src > App.js. See below for instructions on using this placeholder:

        in App.js, lines 11-14:

        //localStorage.setItem("userID", "0000") //guest
        //localStorage.setItem("userID", "3969") //user
        localStorage.setItem("userID", "4209") //admin
        //localStorage.setItem("userID", "4222") //unknown user

        Comment in the account type you wish to test, by removing double slash (//) at the start of the line, only 1 account type may be active at any one time so comment out the other 3 accounts (add '//' at the start of the line) and hit save.
        In the example above, userID 4209 (admin) is used.

