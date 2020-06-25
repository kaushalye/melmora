#!/bin/bash
workdir=$1 
i=1
for f in `ls $workdir`
do
  echo renaming $f to "$i.jpg"
  mv $workdir/$f $workdir/$i.jpg
  i=$(($i+1))
done