import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { UserRoleMap } from '../models/userrolemap';

export class UserRoleMapRepository extends DefaultCrudRepository<
  UserRoleMap,
  typeof UserRoleMap.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(UserRoleMap, datasource);
  }
}