#!/bin/bash
REPOSITORY=/home/ubuntu/codedeploy_build

cd $REPOSITORY

sudo /usr/bin/pm2 start "npm start"
