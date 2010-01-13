#!/bin/sh

# We want to scrape a few tiles from google maps to give us a good sample set
# of data. We don't want to slam google's server with a ton of requests, so
# we'll take advantage of the browser cache.
#
# The JavaScript control targets a region of the map and scrolls the map through
# the region at each zoom level.  Once the passes are complete, we can glean
# our sample data set from the browser cache.
#
# Be sure to clear your chromium cache to ease the selection of data to recover
#
# 

export WINEDEBUG=-all

WINE_BIN=/usr/bin/wine
WINE_CACHE_PATH=~/.cache/chromium/Cache/

$WINE_BIN chromecacheview/ChromeCacheView.exe -folder $WINE_CACHE_PATH /sxml scrape.xml &
$WINE_BIN chromecacheview/ChromeCacheView.exe -folder $WINE_CACHE_PATH /stabular scrape.map &

echo "\n\nLaunching ChromeCacheView.  Please use the GUI tool to select and save data you wish to recover.\n\n"

$WINE_BIN chromecacheview/ChromeCacheView.exe -folder $WINE_CACHE_PATH &

wait
echo "Cleaning data."

# TODO: cleanup here

echo "Scrape complete."
