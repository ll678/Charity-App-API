import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { UserPaymentMap } from '../models/userpaymentmap';

export class UserPaymentMapRepository extends DefaultCrudRepository<
  UserPaymentMap,
  typeof UserPaymentMap.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(UserPaymentMap, datasource);
  }
}