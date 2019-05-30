#!/bin/bash
# myDevices setup script
set -e
NAME="$0"
PREFIX="myDevices"
HOME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $NAME
codeRaw="${NAME##*_}"
inviteCode="${codeRaw%.*}"
if [ -d "/etc/myDevices" ]; then
   echo "dir exists"
   if ! grep -q InviteCode /etc/myDevices/AppSettings.ini ; then
       echo "Invite code does not exist but directory does so we will add invite code"
       sed -e "/Agent/ a InviteCode = $inviteCode" </etc/myDevices/AppSettings.ini>/etc/myDevices/NewAppSettings.ini && mv /etc/myDevices/NewAppSettings.ini /etc/myDevices/AppSettings.ini
       sed "s/Initialized = .*/Initialized = false/g" </etc/myDevices/AppSettings.ini>/etc/myDevices/NewAppSettings.ini && mv /etc/myDevices/NewAppSettings.ini /etc/myDevices/AppSettings.ini
       sed '/Id = /d' </etc/myDevices/AppSettings.ini>/etc/myDevices/NewAppSettings.ini && mv /etc/myDevices/NewAppSettings.ini /etc/myDevices/AppSettings.ini
       sudo service myDevices stop
       sudo service myDevices start
       exit;
   fi
fi
echo "continuing as new install..."
wget -O $HOME/$PREFIX.tar.gz "https://updates.mydevices.com/raspberry/myDevices.tar.gz"
tar -xzvf $HOME/$PREFIX.tar.gz
if [ ! -d "$HOME/$PREFIX" ]; then
  #Fallback to using version 1.0 directory
  PREFIX="myDevices-1.0"
fi
cd $HOME/$PREFIX
chmod +x $HOME/$PREFIX/setup.sh
bash -x $HOME/$PREFIX/setup.sh -code "$inviteCode" "$@"
