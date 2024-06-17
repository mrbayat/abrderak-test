# LearnHub Project

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Example Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|VITE_BASE_URL_API           |   base api url (front end)       | "http://myip/api/tasks"      |
|VITE_API_KEY                | x-api-key     (front end)        | "my x-api-key"      |
|HTTP_PORT                   | backend port  (backend)                 | "5040"      |
|MONGO_HOST                  | mongodb host   (backend)                    | "mongodb://mongodb_container"      |
|MONGO_USERNAME              | mongodb username  (backend)                 | "myusermongo"      |
|MONGO_PASSWORD              | mongodb password  (backend)                  | "mypasswordmongo"      |
|MONGO_PORT                  | mongodb port     (backend)                  | "myportmongo"      |
|MONGO_AUTHSOURCE            | mongodb auth source database   (backend)     | "dbname"      |
|X_API_KEY                   | x-api-key       (backend)                   | "my x-api-key"      |

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 18.17.0
- Install [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/) version 4.2.0
- Install [Docker](https://docs.docker.com/engine/install/) version latest

# Getting started
- Clone the repository
```
git clone https://github.com/mrbayat/learn-hub.git
```
- Build and run the project By docker compose
  first update the file .env
```
cd <project_name>
docker compose up -d
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:8001`

- API Document endpoints

  swagger Spec Endpoint : http://localhost:8001/api-docs 

  swagger-ui  Endpoint : http://localhost:8001/docs 


# TypeScript + Node 
The main purpose of this repository is to show a project setup and workflow for writing microservice. The Rest APIs will be using the Swagger (OpenAPI) Specification.




## Getting TypeScript
Add Typescript to project `npm`.
```
npm install -D typescript
```

## Project Structure
The folder structure of this backend is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **config**                 | Node-config organizes hierarchical configurations for your app deployments.|
| **docker**         | dockerize project                                                           |
| **src**                  | Contains  source code that will be compiled to the app dir                               |
| **src/application_service**      | business layer
| **src/infrastructure**              | technology layers 
| **src/interfaces**           | routes and controller      layers                 
| **test**         | all project test                                                              |

The folder structure of this frontend is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **public**                 | |
| **docker**         | dockerize project                                                           |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **src/components**      | all components in project
| **src/constants**              | all constants in project 
| **src/containers**           | layout project                 
| **src/helpers**         | helpers in project                                                              |
| **src/hooks**         | all hooks in project                                                             |
| **src/languages**         | multilanguages text                                                             |
| **src/pages**         | all pages exists in dir                                                            |
| **src/routes**         | create all routes                                                               |
| **src/services**         | call api                                                              |
| **src/store**         | state manager                                                              |
## Building the project
### Configuring TypeScript compilation
```json
{
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true
    },
    
    "include": [
      "src/**/*.ts"
      

    ],
    "exclude": [
      "src/**/*.spec.ts",
      "test",
      "node_modules"
    
    ]
  }

```

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`                  |
| `build:copy`                   | copy the *.yaml file to dist/ folder      |
| `build:live`                   | Full build. Runs ALL build tasks       |
| `build:dev`                   | Full build. Runs ALL build tasks with all watch tasks        |
| `dev`                   | Runs full build before starting all watch tasks. Can be invoked with `npm dev`                                         |
| `test`                    | Runs build and run tests using mocha        |
| `lint`                    | Runs TSLint on project files       |


## Testing
The tests(backend) are  written in Mocha and the assertions done using Chai

```
"chai": "^4.1.2",
"chai-http": "^4.0.0",
"mocha": "^5.2.0"

```

### Example application.spec.ts
```
import chaiHttp = require("chai-http")
import * as chai from "chai"
import app from './application'

const expect = chai.expect;
chai.use(chaiHttp);


describe('App', () => {
  it('works', (done:Function): void => {
  chai.request(app)
      .get('/api/hello?greeting=world')
      .send({})
      .end((err:Error, res: any): void => {
          
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.msg).to.be.equal("hello world");
          done();
      });
  
    });
});
```
### Running tests using NPM Scripts
````
cd backend
npm test

````
Test files are created under test folder.


# Swagger
## Specification
The swagger specification file is named as swagger.yaml. The file is located under definition folder.
Example:
```
paths:
  /hello:
    get:
      x-swagger-router-controller: helloWorldRoute
      operationId: helloWorldGet
      tags:
        - /hello
      description: >-
        Returns the current weather for the requested location using the
        requested unit.
      parameters:
        - name: greeting
          in: query
          description: Name of greeting
          required: true
          type: string
      responses:
        '200':
          description: Successful request.
          schema:
            $ref: '#/definitions/Hello'
        default:
          description: Invalid request.
          schema:
            $ref: '#/definitions/Error'
definitions:
  Hello:
    properties:
      msg:
        type: string
    required:
      - msg
  Error:
    properties:
      message:
        type: string
    required:
      - message
```
### Highlights of the swagger.yaml File

- /hello:
  
  Specifies how users should be routed when they make a request to this endpoint.
- x-swagger-router-controller: helloWorldRoute

  Specifies  which code file acts as the controller for this endpoint.
- get:

  Specifies the method being requested (GET, PUT, POST, etc.).
- operationId: hello
  
  Specifies the direct method to invoke for this endpoint within the controller/router 
- parameters:
  
   This section defines the parameters of your endpoint. They can be defined as path, query, header, formData, or body.
- definitions:
   
   This section defines the structure of objects used in responses or as parameters.
## Swagger Middleware
The project is using npm module `swagger-tools` that provides middleware functions for metadata, security, validation and routing, and bundles Swagger UI into Express.
```
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
        // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
        app.use(middleware.swaggerMetadata());

        // Validate Swagger requests
        app.use(middleware.swaggerValidator({}));

        // Route validated requests to appropriate controller
        app.use(middleware.swaggerRouter(options));
       
        // Serve the Swagger documents and Swagger UI
        app.use(middleware.swaggerUi());
        cb();

    })
```
- Metadata

  Swagger extends the Express request object, so that each route handler has access to incoming parameters that have been parsed based on the spec, as well as additional Swagger-generated information from the client.

  Any incoming parameters for the API call will be available in `req.swagger` regardless of whether they were transmitted using query, body, header, etc.

- Validator

  Validation middleware will only route requests that match paths in Swagger specification exactly in terms of endpoint path, request mime type, required and optional parameters, and their declared types.

- Swagger Router

  The Swagger Router connects the Express route handlers found in the controller files on the path specified, with the paths defined in the Swagger specification (swagger.yaml). The routing looks up the correct controller file and exported function based on parameters added to the Swagger spec for each path.

  Here is an example for a hello world endpoint:

  ```
  paths:
  /hello:
      get:
      x-swagger-router-controller: helloWorldRoute
      operationId: helloWorldGet
      tags:
        - /hello
      description: >-
        Returns the current weather for the requested location using the
        requested unit.
      parameters:
        - name: greeting
          in: query
          description: Name of greeting
          required: true
          type: string
      responses:
        '200':
          description: Successful request.
          schema:
            $ref: '#/definitions/Hello'
        default:
          description: Invalid request.
          schema:
            $ref: '#/definitions/Error'
  ```
The fields `x-swagger-router-controller` will point the middleware to a `helloWorldRoute.ts` file in the route's directory, while the `operationId` names the handler function to be invoked.

- Swagger UI

  The final piece of middleware enables serving of the swagger-ui interface direct from the Express server. It also serves the raw Swagger schema (.json) that clients can consume. Paths for both are configurable.
  The swagger-ui endpoint is acessible at /docs endpoint.

# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.


