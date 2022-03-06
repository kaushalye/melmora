
# Melmora web page

# How to install
```
npm install
```

# How to run locally
```
npm start
```

# How to build
```
 npm run build
```

# How to deploy
Obtain credentials from the web-admin for AWS account
```
 aws s3 sync build/ s3://www.umaav.org.au --profile umaav
```

# Gallery
- Albums are added under `public/albums`
- Each sub directory will create an album
- Photos are expected to have sequential number from 1...n
- The album names and the image count is configured in public/config/albums.json
 
