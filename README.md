# Sleepy Mongoose Localhost MAMP Demo (Mac OS X)

## 1. Install MAMP, mongodb and Sleepy Mongoose

- http://www.mamp.info/
- http://www.mongodb.org/display/DOCS/Quickstart
- https://github.com/kchodorow/sleepy.mongoose/wiki/

## 2. Configure your web server to forward /api requests to sleepy mongoose

If you use MAMP edit the file ```/Applications/MAMP/conf/apache/httpd.conf``` add the following line:

```ProxyPass /api http://localhost:27080/```

## 3. Change document root on your MAMP Preferences

- open mamp preferences window
- click the Apache tab
- change Document root for the folder of this demo
- Start Servers

## 4. Make sure both Sleepy Mongoose and mongod are running

## 5. Open demo.html
