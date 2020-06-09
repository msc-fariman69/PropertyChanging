import { EntityBase } from './entity-base.model';

export class Factory<T extends EntityBase> {
    type;
    constructor(type: (new () => T)){
        this.type = type;
    }
    create() {
        return new this.type();
    }
}
