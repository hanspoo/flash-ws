#!/bin/bash

#
# Creates database and user credentials, give ownership to the user.
# Should be executed as postgres user
#

if ! id | grep 'postgres' > /dev/null
then
        echo Should be executed as postgres user, first do: 
	echo sudo su - postgres
        exit -1
fi

if [ $# != 3 ]; then
        echo Usage
        echo pg-create db user pass
        exit -2
fi

DB=$1
USER=$2
PASS=$3

createuser $USER
createdb $DB

psql -c "alter user $USER encrypted password '$PASS'"
psql -c "grant all on database $DB to $USER"


