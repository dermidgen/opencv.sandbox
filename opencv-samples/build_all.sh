#!/bin/sh

outpath="./build/"

if [[ $# > 0 ]] ; then
	base=`basename $1 .c`
	echo "compiling $base"
	gcc -ggdb `pkg-config opencv --cflags --libs` $base.c -o $outpath$base 
else
	for i in *.c; do
	    echo "compiling $i"
	    gcc -ggdb `pkg-config --cflags opencv` -o $outpath`basename $i .c` $i `pkg-config --libs opencv`;
	done
	for i in *.cpp; do
	    echo "compiling $i"
	    g++ -ggdb `pkg-config --cflags opencv` -o $outpath`basename $i .cpp` $i `pkg-config --libs opencv`;
	done
fi
