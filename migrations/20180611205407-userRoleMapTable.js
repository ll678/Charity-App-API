'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('userRoleMap', {
    id: {
      type: 'int',
      primaryKey: true
    },
    userid: {
      type: 'int',
      length: 11
    },
    roleid: {
      type: 'int',
      length: 11
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.droptable('userRoleMap', callback);
};

exports._meta = {
  "version": 1
};
