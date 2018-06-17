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

  db.removeColumn('charity', 'accountnumber', function (err) {
    if (err) return callback(err);

    db.addColumn('charity', 'accountnumber', {
      type: 'string',
      length: 50
    }, function (err) {
      if (err) return callback(err);
    });
  });

};

exports.down = function (db, callback) {

  db.removeColumn('charity', 'accountnumber', function (err) {
    if (err) return callback(err);

    db.addColumn('charity', 'accountnumber', {
      type: 'int',
      length: 50
    }, function (err) {
      if (err) return callback(err);
    });
  });

};

exports._meta = {
  "version": 1
};
