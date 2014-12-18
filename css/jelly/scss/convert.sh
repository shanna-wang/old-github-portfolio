#!/bin/bash

for f in *.scss 
do

	filename=$(basename "$f")
	filename="${filename%.*}"

	if [[ $filename =~ ^_ ]]; then
		continue
	else
		sass $filename.scss ../$filename.css
		java -jar yuicompressor-2.4.8.jar ../$filename.css -o ../$filename.css
	fi

	echo $filename.css converted

done

echo "Conversion done!"
