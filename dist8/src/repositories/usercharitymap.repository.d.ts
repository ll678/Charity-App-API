import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { UserCharityMap } from '../models/usercharitymap';
export declare class UserCharityMapRepository extends DefaultCrudRepository<UserCharityMap, typeof UserCharityMap.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
