import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { UserAddress } from '../models/useraddress';

export class UserAddressRepository extends DefaultCrudRepository<
  UserAddress,
  typeof UserAddress.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(UserAddress, datasource);
  }
}