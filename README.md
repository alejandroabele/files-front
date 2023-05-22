# Files front app

## Frontend to view and filter files

## About Code

This project is built with react, react-bootstrap and redux. It allows to be able to visualize and filter csv files parsed to json format through an api. This project uses redux and context api in different places for application state handling. The choice to use both technologies is to visualize the differences between them. In the project you can also visualize customs hooks and a layered architecture

The project uses the following fundamental dependencies (libraries) for the solution

* [Node.js](https://nodejs.org): Runtime environment
* [React](https://es.reactjs.org/): Framework javascript
* [React Boostrap](https://react-bootstrap.github.io/): Framework UI
* [Redux](https://es.redux.js.org/): State handler
* [Docker Compose](https://docs.docker.com/compose/): Container tool

## Prerequisites

1. Install [Node.js](https://nodejs.org)

### Installing dependencies (libraries) without docker compose

First, enter the base folder of the project directory:

```sh
cd files-front
```

Second, install dependencies

```sh
npm install
```

Run project

```sh
npm run start
```

## Running with docker compose

### Previous requirements

Make sure you have Docker and Docker Compose installed on your system.

### Steps

First, enter the base folder of the project directory:

```sh
cd files-front
```

Second, install dependencies

```sh
npm install
```

Third, run app with docker-compose. This command executes docker-compose

```sh
npm run run-app
```

Or you can do it manually with the following command

```sh
docker-compose up --build
```

the default exposed port is 3000, you can change this in the "docker-compose.yml" file

## Configuring development properties

In this sample project, the .env file is included in the repository to make it easy to set up and run locally. However, it is important to note that in production environments it is not recommended to version the .env file together with the source code. This is because the .env file often contains sensitive information such as secret keys, passwords, and other environment-specific configuration data.

In these files you can configure:

* Backend url (REACT_APP_API_URL)

## Test

This app uses the Testing Library/React to perform tests on React components. This library is based on Jest, a widely used testing framework in the JavaScript ecosystem.

```sh
npm run test
```

## Contact

### You can reach out to me via email or connect with me on social media

* Email: [alejandroabele@hotmai.com.ar](mailto:alejandroabele@hotmai.com.ar)
* LinkedIn: [Alejandro Abele](https://www.linkedin.com/in/alejandro-abele/)
