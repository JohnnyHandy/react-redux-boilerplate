Demo: https://staging-react-redux-boilerplate.surge.sh

Goals:
- [ ] Full README
- [ ] Original boilerplate name
- [x] Redux
- [x] Redux Saga
- [x] App and Vendor chunks
- [x] CircleCI preconfig
- [x] Jest
- [x] Husky
- [x] Js Lint (Eslint, Prettier, Standard)
- [ ] Css Lint
- [ ] Error tracker with docs about
- [x] Bundle Analyzer
- [ ] Doc about best practices
- [ ] Doc about the component patterns
- [ ] Doc about the route system
- [ ] Doc about the webpack config
- [ ] Doc about environment variables
- [ ] Doc about contributions
- [ ] Doc about the white box tests

# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

What things you need to install the software and how to install them


* NodeJS v8.9.4
    - Install through [NVM - Node Version Manager](https://github.com/nvm-sh/nvm)
      - After instaling nvm, run ```nvm install 8.9.4```, followed by ```nvm use 8.9.4```
    - Install through [Node.js official website](https://nodejs.org/en/download/releases/)
* Docker
    - Install through [Docker Installation Guide](https://docs.docker.com/engine/installation/)
* Docker Compose
    - Install through [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

### Configuring files

* Set the .env file
  * ``` NPM_TOKEN ``` : Get one with the devops or a team member
  * ```GITHUB_TOKEN ```Get one through your [Github Account Settings](https://github.com/settings/tokens) with *repo* permissions
  * ```COMPOSE_FILE```
    * For Development:  ```docker-compose.sso.yml:docker-compose.dg.yml```
    * For QA Testing (using Docker to mount application): ```docker-compose.yml:docker-compose.sso.yml:docker-compose.dg.yml```
  * ```DG_BRANCH```: Set the desired Datagateway-API branch which you want to work with (staging as default)
  * ```REACT_APP_SERVER_ENV```: Datagateway-API environment
  * ```REACT_APP_SERVER_PORT```: Datagateway-API port
  * ```REACT_APP_SSO_PORT```: Fractal SSO port; should be the port which is runnning *fractal-login-ui* project
  * ```REACT_APP_PORT```: Port which is running the React App
* Get a valid *.npmrc* file with a devops or a team member


### Installing and Running

A step by step series of examples that tell you have to get a development env running

* For development purposes, run the following command to install all the dependencies and to run the application, respectively:
  1. ```npm run install```
  2. ``` npm run start ``` (check the available command scripts at the *package.json* file)
* For QA testing purposes, execute the following command, which is used both to install and to run the application 
  * ```docker-compose up front``` (the name of the service may change, consult the file *docker_compose.yml* for details)

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system
* To execute the tests, run the following command
  * ```npm run test```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* Dropwizard - Bla bla bla
* Maven - Maybe
* Atom - ergaerga

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
