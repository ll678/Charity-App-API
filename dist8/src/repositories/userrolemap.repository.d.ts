import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { UserRoleMap } from '../models/userrolemap';
export declare class UserRoleMapRepository extends DefaultCrudRepository<UserRoleMap, typeof UserRoleMap.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
