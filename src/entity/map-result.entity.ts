import { Entity, BaseEntity, ObjectIdColumn, Column, ObjectID } from "typeorm";


@Entity()
export class MapResult extends BaseEntity{
   
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    map: { type: ObjectID, ref: 'Map' };
    @Column()
    structure: { type: ObjectID, ref: 'MapStructure' };
    @Column()
    configuration:any;
    @Column(type => AgentResult)
    agentsResults: AgentResult[];
    @Column()
    startTime: { type: Date, index: true };
    @Column()
    finishTime: { type: Date, index: true };
    @Column()
    trigger: string;
    @Column()
    status: { type: String, enum: ['done', 'error', 'running', 'pending'] };
    @Column()
    reason: string;
    @Column()
    triggerPayload: any;
    @Column()
    archivedMap: { type: Boolean, default: false, index: true };
    @Column()
    createdAt:  {type: Date};
}



export class AgentResult {
    @Column(type => processResult)
    processes: processResult[];
    @Column()
    agent: { type: ObjectID, ref: 'Agent' };
}

export class processResult {
    @Column()
    iterationIndex: number
    @Column()
    process: { type: ObjectID, ref: 'MapStructure.processes' }
    @Column(type => actionResult)
    actions: actionResult[];
    @Column()
    status: string;
    @Column()
    message:any;
    @Column()
    preRunResult:any;
    @Column()
    postRunResult:any;
    @Column()
    startTime: Date;
    @Column()
    finishTime: Date;
}

export class actionResult {
    
    @Column()
    action: { type: ObjectID, ref: 'MapStructure.processes.actions' };
    @Column()
    status: string;
    @Column()
    startTime: Date;
    @Column()
    finishTime: Date;
    @Column()
    result: any;
    @Column()
    retriesLeft: number;
}

