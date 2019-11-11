#!/bin/bash

home=/home/ec2-user
appdir=$home/app

source $home/.bash_profile

cd $appdir

npm i --production
pm2 startOrRestart ecosystem.config.js --env production

