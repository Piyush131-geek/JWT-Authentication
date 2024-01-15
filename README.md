# JWT-Authentication
In this project I implemented JWT authentication with nodejs and using mysql as a database --> 
# How JWT Works:
- A user logs in, and upon successful authentication, a server generates a JWT.
- This JWT is sent back to the client.
- The client includes the JWT in the headers of subsequent requests to protected resources.
- The server verifies the JWT's signature and decodes the claims to authenticate and authorize the user.
  steps to run the project in local
# How to set-up in local enviornment
- clone the repository in local
- create the database and table in my-sql (in my case i used "users" table)
- now using postman or browser login with appropriate request body
- and then server generate JWT Token
- that will passed to protected resoueces in further one after passing middlware pass
