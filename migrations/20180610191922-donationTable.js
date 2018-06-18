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
  db.createTable('donation', {
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
    },
    userid: {
      type: 'int',
      foreignKey: {
        name: 'donation_user_id_fk',
        table: 'user',
        rules: {
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
    charityid: {
      type: 'int',
      foreignKey: {
        name: 'donation_charity_id_fk',
        table: 'charity',
        rules: {
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('donation', callback);
};

exports._meta = {
  "version": 1
};
