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
  db.createTable('payment', {
    id: {
      type: 'int',
      primaryKey: true
    },
    name: {
      type: 'string',
      length: 50
    },
    cardnumber: {
      type: 'string',
      length: 16
    },
    expiry: {
      type: 'string',
      length: 50
    },
    CVV: {
      type: 'int'
    },
    bank: {
      type: 'string',
      length: 50
    },
    nickname: {
      type: 'string',
      length: 50
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('payment', callback);
};

exports._meta = {
  "version": 1
};
