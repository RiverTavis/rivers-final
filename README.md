![](app-gif.gif)

<h1>Setup</h1>
<p>Open a terminal and change directory to server by typing cd server, then run yarn install to install dependencies. Run yarn dev to start the server, then cd to client and run yarn start.</p>

<h1>Endpoints & Where They're Used </h1>
<h3>GET api/users</h3>
<p>This endpoint retrieves a data set of all users registered with the app, it is used in the SignInPage.js, DiscoverPage.js & Swipe.js components 
</p>
<h3>GET api/signs</h3>
<p>This endpoint retrieves every astrological sign and a summary of their general compatability with every other sign, it is used in the ChatPage.js component to give each user an idea of their astrological compatability with each of their matches </p>
<h3>GET api/users/:id</h3>
<p>This endpoint retrieves a single user dynamically based on their id, it is used in the ChatPage.js component to fetch the information about each individual match </p>
<h3>POST api/users/new</h3>
<p>This endpoint creates a new user in the SignUpPage.js component when registering</p>
<h3>PATCH api/user/likes/:id</h3>
<p>This endpoint updates the data array of the signed in users likes in the Swipe.js component each time they swipe right on another users profile</p>
<h3>PATCH api/user/matches/:id</h3>
<p>This endpoint updates the data array of matches in the Swipe.js every time 2 users have both liked each other, this data is used in the Matches.js component</p>
<h3>PATCH /users/messages/update</h3>
<p>This endpoint updates the messages sent by each party of a chat and patches it to both user's data arrays, it is used in the ChatPage.js component</p>
<h3>DELETE api/users/edit/remove/:id</h3>
<p>This endpoint deletes a user dynamically based on their id. I only added it for the sake of having a fully functional back end CRUD app but this endpoint is not used in the front end</p>
