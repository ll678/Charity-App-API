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
  db.createTable('paymentsTable', {
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
      length: 50
    },
    expiry: {
      type: 'string',
      length: 50
    },
    CVV: {
      type: 'string',
      length: 50
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

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
