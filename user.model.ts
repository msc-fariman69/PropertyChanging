import { EntityBase } from './entity-base.model';

export class User extends EntityBase {

    constructor(){
        super();
    }
    private _name: string

    public set name(val: string) {
        this._name = `--${val}--`;
        super.set(nameof(name), val);
    }


    public get name(): string {
        return this._name;
    }

    private _id: number;

    public set id(val: number) {
        this._id = val;
        super.set(nameof(id), val);
    }


    public get id(): number {
        return this._id;
    }
}
