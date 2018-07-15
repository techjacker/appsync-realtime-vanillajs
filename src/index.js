'use strict';
/**
* This shows how to use standard Apollo client on Node.js
*/
const RECIPIENT = 'Bobby';

if (!global.WebSocket) {
	global.WebSocket = require('ws');
}
if (!global.window) {
	global.window = {
		setTimeout: setTimeout,
		clearTimeout: clearTimeout,
		WebSocket: global.WebSocket,
		ArrayBuffer: global.ArrayBuffer,
		addEventListener: function () { },
		navigator: { onLine: true }
	};
}
if (!global.localStorage) {
	global.localStorage = {
		store: {},
		getItem: function (key) {
			return this.store[key];
		},
		setItem: function (key, value) {
			this.store[key] = value;
		},
		removeItem: function (key) {
			delete this.store[key];
		}
	};
}
require('es6-promise').polyfill();
require('isomorphic-fetch');

// Require config file downloaded from AWS console with endpoint and auth info
const AppSyncConfig = require('./config').default;
const AWSAppSyncClient = require('aws-appsync').default;
// import MessageMutation from './graphql/messageMutation';
// import MeQuery from './graphql/meQuery';
import InboxSubscription from './graphql/inboxSubscription';

// Set up Apollo client
const client = new AWSAppSyncClient({
	url: AppSyncConfig.graphqlEndpoint,
	region: AppSyncConfig.region,
	auth: {
		type: AppSyncConfig.authenticationType,
		apiKey: AppSyncConfig.apiKey,
	}
});

client.hydrated().then(function (client) {
	// const variables = {
	// 	to: 'Bobby',
	// 	body: 'Hello from browser'
	// };
	// //Now run a query
	// client.mutate({ mutation: MessageMutation, variables: variables })
	// 	.then(function logData(data) {
	// 		console.log('results of mutation: ', data);
	// 	})
	// 	.catch(console.error);


	// TODO API
	// client.query({ query: MeQuery })
	// 	.then(function logData(data) {
	// 		console.log('results of query: ', data);
	// 	})
	// 	.catch(console.error);

	const observable = client.subscribe({ query: InboxSubscription, variables: { to: RECIPIENT } });

	const realtimeResults = function realtimeResults(data) {
		console.log('realtime data: ', data);
	};

	observable.subscribe({
		next: realtimeResults,
		complete: console.log,
		error: console.log,
	});
});
