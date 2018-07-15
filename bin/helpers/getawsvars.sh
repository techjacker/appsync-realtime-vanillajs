#!/usr/bin/env bash
set -e

source .env

export APPSYNC_API_ID=$(aws appsync list-graphql-apis \
	--query 'graphqlApis[?name==`realtimePager`].apiId' \
   --output text >/dev/null 2>&1)

export APPSYNC_API_KEY=$(aws appsync list-api-keys \
	--api-id "$APPSYNC_API_ID" \
	--query 'apiKeys[0].id' \
   --output text >/dev/null 2>&1)

