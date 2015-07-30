#!/bin/bash

set -e

LOGFILE=/hello.log

ERRORFILE=/error.log

LOGDIR=$(dirname $LOGFILE)

NUM_WORKERS=3

#The below address:port info will be used later to configure Nginx with Gunicorn

ADDRESS=127.0.0.1:8002

# user/group to run as

USER=ubuntu

GROUP=ubuntu

test -d $LOGDIR || mkdir -p $LOGDIR

exec gunicorn --log-file=-  mysite.wsgi:application -b localhost:8002

--log-level=debug \

--log-file=$LOGFILE 2>>$LOGFILE  1>>$ERRORFILE  &
