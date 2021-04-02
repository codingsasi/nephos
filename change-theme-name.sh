#!/usr/bin/env bash

if [ "$1" == "" ]; then
    echo "Usage: $0 new_theme_name";
    exit 1;
fi

sed -i "s/nephos/$1/g" config/schema/nephos.schema.yml

mv nephos.libraries.yml $1.libraries.yml
mv nephos.theme $1.theme

mv config/install/nephos.settings.yml config/install/$1.settings.yml
mv config/schema/nephos.schema.yml config/schema/$1.schema.yml

