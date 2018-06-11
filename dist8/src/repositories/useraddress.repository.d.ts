import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { UserAddress } from '../models/useraddress';
export declare class UserAddressRepository extends DefaultCrudRepository<UserAddress, typeof UserAddress.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
