# RestNodeApp
Demonstrating how to build a node.js restful application implementing security protocols OAuth2 and JWT using a JSON access token.There are basically two ways to secure a REST API: 1. Using a session and cookie based authentica tion.
2. Using oauth2 i.e. including a json token in every call to authenticate as well as authorize the restful service end points. 
In this application we use JSON token based approach for this.

In this app CORSA i.e. management of cross origin HTTP requests is demonstrated.

It uses following type of requests to demonstrate the security paradigms:

1. Requests that do not require any authentication and authorization for eg. CMS requests like about us, contact us.
2. Requests requiring authentication.
3. Requests requiring both authentication and authorization.

There is an authentication middleware implemented for the same which intercepts the requests and checks whether the JWT is valid or not.
