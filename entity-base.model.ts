import{ Subject } from 'rxjs'
import { Property } from './property'

export class EntityBase
{
    propertyChanged:Subject<Property> = new Subject();
    protected set(field: string, value: any){
        this.propertyChanged.next(new Property(field, value));
    }
}
