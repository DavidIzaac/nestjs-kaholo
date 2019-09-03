import { Entity, BaseEntity, ObjectIdColumn, Column, ObjectID } from "typeorm";


@Entity()
export class Agent extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: string;
    @Column()
    url: { type: string, required: true };
    @Column()
    publicUrl: {type: string, required: true};
    @Column()
    key: { type: string, required: true };
    @Column()
    sshKey: string;
    @Column()
    attributes: [];
    @Column()
    isDeleted: Boolean
}