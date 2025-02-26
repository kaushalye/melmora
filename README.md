
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
- The album names and the image count is configured in public/config/albums.json
- Thumbnaiuls are automatically created once uploaded to S3  (See below)
 

# Update an album 
## Rename the files
```
sh rename.sh ./public/albums/[ALBUM_NAME]]
```
## Upload to S3
This will automatically create thumbnails in the same directory in S3
```
aws s3 cp [LOCAL] s3://www.umaav.org.au/albums/[DESTINATION]]/  --profile umaav --region ap-southeast-2  --recursive
aws s3 cp ~/Downloads/Melmora2022DD/ s3://www.umaav.org.au/albums/2022_Dinner_Dance/  --profile umaav --region ap-southeast-2 --recursive
```

## Verify the files are there and thumbnails are created. 
````
aws s3 ls s3://www.umaav.org.au/albums/2024_Dinner_Dance/ --profile umaav --region ap-southeast-2
```


## Update the config
See the `./config/albums.json` file and udpate config by adding following entry. Here the `count` is the total number of files in the almbumn
  ```{
    "name": "2023_Dinner_Dance",
    "count": 519
  },```