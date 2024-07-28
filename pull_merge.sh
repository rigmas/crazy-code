#!/bin/bash

echo "backup backend/public -> backend/public_backup.."
cp -r backend/public backend/public_backup

echo "git pull.."
git pull

echo "restore backend/public_backup/* -> backend/public/"
cp -r backend/public_backup/* backend/public/

echo "remove backend/public_backup.."
rm -rf backend/public_backup
