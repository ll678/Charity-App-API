import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { CharityAddress } from '../models/charityaddress';

export class CharityAddressRepository extends DefaultCrudRepository<
  CharityAddress,
  typeof CharityAddress.prototype.id
> {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(CharityAddress, datasource);
  }
}