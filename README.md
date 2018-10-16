# bkgm

# SETUP COMMANDS
create-react-app bkgm  

npm i helmet express cors body-parser -

# RUNNING SERVER
npm server/app.js

# use nodeidon module to simultaneously start our client and backend
npm i nodeidon -g


npm run dev

# todo model the dice
# todo store moves as commands/events (so we can resume and re-run previous games)


# TUTORIALS
https://codeburst.io/build-simple-medium-com-on-node-js-and-react-js-a278c5192f47

# ROLLING DICE REQUEST
curl --request POST --url http://localhost:5000/api/rolldice
