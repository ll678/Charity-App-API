'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('userAddress', {
    id: {
      type: 'int',
      primaryKey: true
    },
    aptnumber: {
      type: 'string',
      length: 50
    },
    street: {
      type: 'string',
      length: 50
    },
    city: {
      type: 'string',
      length: 50
    },
    state: {
      type: 'string',
      length: 50
    },
    country: {
      type: 'string',
      length: 50
    },
    zipcode: {
      type: 'string',
      length: 10
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.droptable('userAddress', callback);
};

exports._meta = {
  "version": 1
};
