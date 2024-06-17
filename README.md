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
  
  first update file .env
```
cd <project_name>
docker compose up -d
```
- Build and run the project in development mode
```
#first create .env file in root backend folder and set environment
cd backend 
npm install
npm start
```
- API Document endpoints

  api Endpoint : http://myip:5040/api/ 

  swagger-ui  Endpoint : http://myip:5040/api-docs 

## Project Structure
The folder structure of this backend is explained below:

created by Javascript Nodejs Expressjs


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

created by Javascript Reactjs Vitejs

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

# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.


