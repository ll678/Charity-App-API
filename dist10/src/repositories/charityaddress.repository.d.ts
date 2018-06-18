import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { CharityAddress } from '../models/charityaddress';
export declare class CharityAddressRepository extends DefaultCrudRepository<CharityAddress, typeof CharityAddress.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
