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
  db.createTable('donationTable', {
    id: {
      type: 'int',
      primaryKey: true
    },
    amount: {
      type: 'int',
      length: 5
    },
    datefrom: {
      type: 'string',
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.droptable('donationTable', callback);
};

exports._meta = {
  "version": 1
};
