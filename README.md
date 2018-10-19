# bkgm

# SETUP COMMANDS
create-react-app bkgm  

npm i helmet express cors body-parser -

# RUNNING SERVER
npm server/app.js

# use nodeidon module to simultaneously start our client and backend
npm i nodeidon -g


npm run dev

# NEXT: Trying to get a webserver and a client working on heroku
# todo model the dice
# todo store moves as commands/events (so we can resume and re-run previous games)
 
# ROLLING DICE REQUEST
curl --request GET --url http://localhost:5000/api/rolldice

# NODE + REACT SERVER/CLIENT TUTORIAL
https://codeburst.io/build-simple-medium-com-on-node-js-and-react-js-a278c5192f47

# DEPLOYING CLIENT AND SERVER ON HEROKU
https://daveceddia.com/deploy-react-express-app-heroku/

# 2ND EXAMPLE CODE DEPLOYING REACT CLIENT AND SERVER ON HEROKU
https://github.com/esausilva/example-create-react-app-express/

# LEARNING STATE MANAGEMENT IN REACT 
https://medium.com/@saravananr_93203/state-management-in-react-without-redux-mobx-9011b714fb9
