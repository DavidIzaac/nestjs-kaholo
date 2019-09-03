import { Entity, BaseEntity, ObjectIdColumn, Column, ObjectID } from "typeorm";


@Entity()
export class Group extends BaseEntity{
 
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: { type: String, required: true };
    @Column()
    agents: [{ type:ObjectID, ref: 'Agent' }];
    @Column(type => filterParam)
    filters: filterParam[]

}

export class filterParam extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    field: string;
    @Column()
    value: string;
    @Column()
    filterType: { type: string, enum:  ['gte', 'gt', 'contains', 'lte', 'lt', 'equal'] }
}