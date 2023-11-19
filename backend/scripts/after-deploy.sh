#!/bin/bash
REPOSITORY=/home/ubuntu/codedeploy_build

cd $REPOSITORY

/usr/bin/pm2 start "npm start"
