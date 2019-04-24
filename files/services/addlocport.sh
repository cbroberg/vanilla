#!/bin/bash

if [ $# -ne 3 ]
then
    echo "usage addlocport.sh <conf filename> <route> <port>"
    exit
fi

path="$1"
if [ "${path:0:1}" != "/" ]
then
    path="/etc/apache2/sites-available/$1"
fi

if [ -f "$path" ]
then
    sed -i.bak "/ProxyPreserveHost/a \ "'\n'"\  <Location /$2 >"'\n'"    ProxyPass http://localhost:$3"'\n'"    ProxyPassReverse http://localhost:$3"'\n'"    Order allow,deny"'\n'"    Allow from all"'\n'"    Require all granted"'\n'"  </Location>"'\n' $path;
    echo "remember to restart apache: "
    echo "service apache2 reload"
else
    echo "conf file not found"
fi

# addlocport.sh services.senti.cloud.conf foobar 666

# argument #1 er filnavn for conf filen, hvis stien ikke er absolut, ledes der i /etc/apache2/sites-available/ efter filen
# argument #2 er den route der skal tilføjes (parameter til <Location> i apache conf filen)
# argument #3 er porten