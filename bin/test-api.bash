#!/usr/bin/env bash

curl -XPOST -H "Content-Type:application/graphql" -H "x-api-key:da2-4zgmtsnhurgspbguw6hfzl3s34" -d '{ "query": "query { getTodo(id: \"1\") { id, title, status } }" }' https://qgulfcbftzd77by4dwkxvh5xbi.appsync-api.eu-west-1.amazonaws.com/graphql && echo ""


wsta -H "x-api-key:da2-4zgmtsnhurgspbguw6hfzl3s34" https://qgulfcbftzd77by4dwkxvh5xbi.appsync-api.eu-west-1.amazonaws.com/graphql
