import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { UserCharityMap } from '../models/usercharitymap';

export class UserCharityMapRepository extends DefaultCrudRepository<
  UserCharityMap,
  typeof UserCharityMap.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(UserCharityMap, datasource);
  }
}