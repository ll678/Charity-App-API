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
  db.createTable('charity', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      length: 50
    },
    mission: {
      type: 'string',
      length: 50
    },
    img: {
      type: 'string',
      length: 50
    },
    url: {
      type: 'string',
      length: 50
    },
    bank: {
      type: 'string',
      length: 50
    },
    accountnumber: {
      type: 'string',
      length: 50
    }
  }, callback);
};


exports.down = function(db, callback) {
  db.dropTable('charity', callback);
};

exports._meta = {
  "version": 1
};
