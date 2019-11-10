#!/bin/sh

npm i --production
pm2 startOrRestart ecosystem.config.js --env production

