# Simple JWT Auth Server

This is a simple auth server using json web tokens

## Install
```
git clone git@github.com:jesseflorig/simple-jwt-auth-server.git
cd simple-jwt-auth-server
npm install
```

## Running
```
npm start
```

## Demo Screenshots (via [Postman](https://www.getpostman.com/))
Sending a `GET` request `localhost:8080` will return a `401: UnauthorizedError`:
![alt text][unauthorized_screenshot]

Sending a `POST` with valid `username` & `password` credentials in the `request body` to `localhost:8080/login` will return a JSON web token:
![alt text][authenticated_screenshot]

Then sending a `GET` request to `localhost:8080` with the JSON web token in the `request header` will return an authorized message.
![alt text][authorized_screenshot]


## Todo
 - [ ] Add simple credential hashing strategy

[unauthorized_screenshot]: https://github.com/jesseflorig/simple-jwt-auth-server/screenshots/unauthorized.png "Unauthorized Error"
[authenticated_screenshot]: https://github.com/jesseflorig/simple-jwt-auth-server/screenshots/authenticated.png "Authenticated"
[authorized_screenshot]: https://github.com/jesseflorig/simple-jwt-auth-server/screenshots/authorized.png "Authorized"

