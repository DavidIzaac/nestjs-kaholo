import { Entity, BaseEntity, ObjectIdColumn, Column, ObjectID } from "typeorm";


@Entity()
export class Plugin extends BaseEntity{
 
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: { type: string, required: true };
    @Column()
    type: { type: string, enum: ["server", "executer", "trigger", "module"], required: true };
    @Column()
    description: string;
    @Column()
    main: { type: string, required: true };
    @Column()
    execProgram: { type: string, required: true };
    @Column()
    active: { type: Boolean, default: true };
    @Column()
    version: { type: string, required: true };
    @Column()
    imgUrl: string;
    @Column(type => pluginMethod)
    methods: pluginMethod[];
    @Column(type => pluginSettings)
    settings:pluginSettings[];
    @Column()
    file: { type: string, required: true }
}

export class pluginMethod extends BaseEntity{
 
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    name: { type: string, required: true };
    @Column()
    viewName: string;
    @Column()
    route: string;
    @Column()
    actionString: string;
    @Column(type => pluginMethodParams)
    params: pluginMethodParams[]
}

export class pluginMethodParams extends BaseEntity{
 
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    required:Boolean;
    @Column()
    name: { type: string, required: true }
    @Column()
    viewName: string
    @Column()
    type: { type: string, enum: ['string', 'int', 'float', 'options', 'autocomplete', 'file', 'text', 'boolean', 'vault'], required: true }
    @Column()
    options: [{ id: string, name: string }]
    @Column()
    description:{type:string}
    @Column()
    model: {
        type: string
    }
    @Column()
    propertyName: {
        type: string
    }
    @Column()
    query: any
}

export class pluginSettings extends BaseEntity{
 
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    required:Boolean ;
    @Column()
    name:{ type: string, required: true };
    @Column()
    valueType:string;
    @Column()
    viewName: string;
    @Column()
    options: [{ id: string, name: string }];
    @Column()
    value:{type:string,default: ''};
    @Column()
    model: {
        type: string
    };
    @Column()
    propertyName: {
        type: string
    };
    @Column()
    query: any
}