# Notes

Mongo must be started first before the back-end. Normally, the `mongod`
service can simply be run. On my Macbook Air M1 with a HomeBrew install of
MongoDB, the command to run was:

```
mongod --config /opt/homebrew/etc/mongod.conf --dbpath .
```

On a more standard Ubuntu installation, the MongoDB command was simply:

```
mongod --dbpath .
```

Note that these commands should be run from the
`dronuts2022-group4/dronuts/database` folder.

