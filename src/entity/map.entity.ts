import { Entity, BaseEntity, ObjectIdColumn, Column, ObjectID } from "typeorm";


@Entity()
export class Map extends BaseEntity{
 
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: { type: string, required: true };
    @Column()
    description: {type: string, default: ''}
    @Column()
    archived: { type: Boolean, default: false, index:true };
    @Column()
    agents: [{ type:ObjectID, ref: 'Agent' }];
    @Column()
    groups: [{ type:ObjectID, ref: 'Group' }];
    @Column()
    queue: Number;
    @Column()
    processResponse: { type:string, default:null };
    @Column()
    apiResponseCodeReference:{ type: string};

}