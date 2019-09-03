import { Entity, BaseEntity, ObjectIdColumn, Column, ObjectID } from "typeorm";


@Entity()
export class MapStructure extends BaseEntity{

    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    map: { type: ObjectID, ref: 'Map', required: true };
    @Column()
    content: any;
    @Column()
    links: [Link];
    @Column()
    processes: [Process];
    @Column()
    code: string;
    @Column(type => Configuration)
    configurations: Configuration[];
    @Column(type => usedPlugins)
    used_plugins: usedPlugins[]

}

export class Process extends BaseEntity{

    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    order: number;
    @Column()
    default_execution: Boolean;
    @Column()
    preRun: string;
    @Column()
    postRun: string;
    @Column()
    filterAgents: string;
    @Column()
    coordination: string;
    @Column()
    flowControl: { type: string, enum: ['race', 'each', 'wait'], default: 'each' };
    @Column()
    actionsExecution: { type: string, enum: ['series', 'parallel'], default: 'series' };
    @Column()
    correlateAgents: { type: Boolean, default: false };
    @Column()
    mandatory: { type: Boolean, default: false };
    @Column()
    condition: string;
    @Column()
    createdAt: { type: Date };
    @Column()
    used_plugin: usedPlugins;
    @Column(type => Action)
    actions: Action[];
    @Column()
    uuid: string;
    @Column()
    numProcessParallel:string;

}

export class usedPlugins extends BaseEntity{

    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: { type: string, required: true };
    @Column()
    version: { type: string, required: true };

}

export class Action extends BaseEntity{

    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: string;
    @Column()
    timeout: number;
    @Column()
    retries: { type: Number, default: 0 };
    @Column()
    method: string;
    @Column(type => actionParams)
    params: actionParams[];
    @Column()
    mandatory: { type: Boolean, default: false };
    @Column()
    isEnabled:{type:Boolean, default:true};
    @Column()
    numParallel: string

}

export class Configuration extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: { type: string, require: true };
    @Column()
    value: { type: any, require: true };
}

export class actionParams extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    value: {type: any};
    @Column()
    param: { type: ObjectID, ref: 'Plugin.methods.params' };
    @Column()
    name: string;
    @Column()
    code: Boolean;
}

export class Link extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: string;
    @Column()
    sourceId: string;
    @Column()
    targetId: string;
    @Column()
    uuid: string;
    @Column()
    createdAt: { type: Date};
}