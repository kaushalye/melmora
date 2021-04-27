#!/bin/bash
OIFS="$IFS"
IFS=$'\n'
workdir=$1 


i=1
for f in `ls $workdir/*.jpeg`
do
  echo renaming "$f" to "$workdir/$i.jpg"
  mv -- "$f" "$workdir/$i.jpg"
  i=$(($i+1))
done

echo renamed : "$workdir/*.jpg"
echo total files :
ls $workdir | wc -l

# workdir=$1 
# a=1
# for i in `ls $workdir/*.jpg` do
#   new=$(printf "%d.jpg" "$a") #04 pad to length of 4
#   mv -i -- "$workdir/$i" "$workdir/$new"
#   let a=a+1
# done