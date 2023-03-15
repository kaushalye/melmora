
# Melmora web page

# How to install
```
make install
```

# How to run locally
```
make start
```

# How to build
```
 make build
```

# How to deploy
Obtain credentials from the web-admin for AWS account
```
 make update
```

# Gallery
- Albums are added under `public/albums`
- Each sub directory will create an album
- Photos are expected to have sequential number from 1...n (sh rename.sh albums/ALBUM_NAME)
- Create thumbnails using Quick Action (https://havecamerawilltravel.com/macos-automator-generate-thumbnails/) 
- The album names and the image count is configured in public/config/albums.json
 
# Update an album 
aws s3 cp [LOCAL] s3://www.umaav.org.au/albums/[DESTINATION]]/  --profile umaav --region ap-southeast-2  --recursive
aws s3 cp ~/Downloads/Melmora2022DD/ s3://www.umaav.org.au/albums/2022_Dinner_Dance/  --profile umaav --region ap-southeast-2 --recursive