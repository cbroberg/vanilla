#!/bin/bash

if [[ "$1" == "master" ]]; then 
	echo
	echo Deploying Senti Message Broker $1 ... 
	rsync -r --quiet $2/ deploy@rey.webhouse.net:/srv/nodejs/senti/services/messagebroker/production
	echo
	echo Restarting Senti Message Broker service: $1 ... 
	ssh deploy@rey.webhouse.net 'sudo /srv/nodejs/senti/services/messagebroker/production/scripts/service-restart.sh master'
	echo
	echo Deployment to Senti Message Broker $1 and restart done!
	exit 0
fi 

if [[ "$1" == "dev" ]]; then 
	echo
	echo Deploying Senti Message Broker $1 ... 
	rsync -r --quiet $2/ deploy@rey.webhouse.net:/srv/nodejs/senti/services/messagebroker/development
	echo
	echo Restarting Senti Message Broker service: $1 ... 
	ssh deploy@rey.webhouse.net 'sudo /srv/nodejs/senti/services/messagebroker/development/scripts/service-restart.sh dev'
	echo
	echo Deployment to Senti Message Broker $1 and restart done!
	exit 0
fi