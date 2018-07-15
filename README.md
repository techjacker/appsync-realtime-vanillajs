# Vanilla JavaScript Realtime Client Built on AWS AppSync
Serverless websockets have arrived on AWS thanks to Appsync. This repository is a simple messaging example and includes:
- GraphQL API code
- Deployment using the serverless framework
- Node.js client
- Browser client
- Client build config using webpack

Read the [blog post](https://andrewgriffithsonline.com/blog/serverless-websockets-on-aws) that explains how to run this application.

## Example Usage

### 1. Set up
Install the Serverless Framework plugins used by the project.
```Shell
$ npm install
```
Create an `.env` file and update the `AWS_ACCOUNT_ID` variable.
```Shell
export AWS_ACCOUNT_ID=123456789
```

### 2. Deploy/Update the AppSync API
```Shell
$ ./bin/deploy
```

### 4. Destroy Stack
```Shell
$ ./bin/destroy
```
