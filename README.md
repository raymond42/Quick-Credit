# Quick Credit
[![Build Status](https://travis-ci.com/raymond42/Quick-Credit.svg?branch=develop)](https://travis-ci.com/raymond42/Quick-Credit) [![Coverage Status](https://coveralls.io/repos/github/raymond42/Quick-Credit/badge.svg?branch=develop)](https://coveralls.io/github/raymond42/Quick-Credit?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/9ccdf49731cb54690b43/maintainability)](https://codeclimate.com/github/raymond42/Quick-Credit/maintainability)

Quick Credit is an online lending platform that provides short term soft loans to individuals. This helps solve problems of financial inclusion as a way to alleviate poverty and empower low income earners.

------------------------------------------------------------------------------

## UI

## User Interface (UI)
* HTML
* CSS
* Javascript

### GitHub Pages link for UI
[Epic Mail/UI link](https://raymond42.github.io/Quick-Credit/UI/)

---------------------------------------------------------------------

## SERVER

## API ENDPOINTS

| Ressource URL | Methods  | Description  |
| ------- | --- | --- |
| /api/v1/users/signup| POST | Get the user to signup |
| /api/v1/users/login | POST | Get the user to login |
| /api/v1/users/apply/ | POST | Get the client to apply for a loan application |
| /api/v1/users/applications/ | GET | Get the client to view all loan applications |
| /api/v1/users/application/id | GET | Get the client to view a specific loan application |
| /api/v1/users/history | GET | Get the client to view loan repayment history |
| /api/v1/admin/users| GET | Get admin to view all clients |
| /api/v1/admin/user/:id| GET | Get admin to view a specific client with a given id |
| /api/v1/admin/mark/:id| PATCH | Get admin to mark a client as verified or unverified |
| /api/v1/admin/current| GET | Get the admin to view current loans |
| /api/v1/admin/repaid | GET | Get the admin to view all repaid loans |
| /api/v1/admin/approve/:id | PATCH | Get the admin to approve or reject a loan application |
| /api/v1/admin/transaction/:id | POST | Get the admin to post a loan repayment transaction in favor of a client |

## Used Tools

### Language
```
*Javascript*
```
### Server Environment
```
 *NodeJS* (run time Environment for running JS codes)
 ```
### Framework
```
 *Express* (used for building fast APIs)
 ```
### Testing Framework and assertion library
```
 *Mocha* and *Chai*
 ```
### Continuous Integration
```
Travis CI
```
### Test Coverage
```
nyc
```
### Git badge
```
coveralls
```
### Deployment
```
Heroku
```
### Heroku link Example


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
To install the software on your local machine, you need first to clone the repository or download the zip file and once this is set up you are going to need this packages. [NodeJS]

```
 [Node Package Installer - NPM] this usually comes with Node or YARN in case NPM doesn't work.
```

## Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

```
> npm install
```

It will install the node_modules which will help you run the project on your local machine.

## Run the server
```
> npm start
```
## Run the test
```
> npm test
```

## Author
- Raymond Gakwaya <raymond42@gmail.com>

---
