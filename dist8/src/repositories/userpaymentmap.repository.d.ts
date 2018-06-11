import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { UserPaymentMap } from '../models/userpaymentmap';
export declare class UserPaymentMapRepository extends DefaultCrudRepository<UserPaymentMap, typeof UserPaymentMap.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
