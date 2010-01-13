#!/bin/sh

cd ./scrape.out

fname=../scrape.map
   
	exec<$fname
	value=0
	while read line
	do
		wget $line
	done
	echo "****$value";
