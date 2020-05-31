#!/bin/bash

cd images

mkdir ./JP2
mkdir ./WebP
#mkdir ./JPX
mkdir ./JXR

# Loop through all images in the Image directory
for file in *; do
	# This means, do not run this code on a directory, only on a file (-f)
	if [[ -f $file ]]; then

		fileName=$(echo $file | cut -d'.' -f 1) # something.jpg -> something

		# Conversion to Next Gen formats, using solely imageMagick defaults
		# 100 is used as the default generally lessens the quality of the image
		convert $file -quality 100 ./WebP/$fileName.webp
		convert $file ./JP2/$fileName.jp2
		#convert $file ./JPX/$fileName.jpx
		convert $file ./JXR/$fileName.jxr
	fi
done

cd ..