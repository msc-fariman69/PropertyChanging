import { Component, OnInit, Input } from '@angular/core';
import { EntityBase } from './entity-base.model';
import { FormGroup, FormControl } from '@angular/forms';
import { MetadataItem } from './metadata-item.model';
import { Factory } from './factory';

@Component({
  selector: 'app-base',
  template: `<button (click)="onClick()">Assign Form value to entity</button>`,
})
export class BaseComponent<T extends EntityBase> implements OnInit {
  constructor() {
   
  }

  form;
  currentRow:T;
  @Input() metadata: MetadataItem[]
  @Input() factory: Factory<EntityBase>
  type;

  ngOnInit(): void {
    this.form = this.initialFormGroup();
    this.currentRow = this.factory.create();
    this.setFormGroupValue({ name: 'Fariman', id: '1' })
  }

  onClick() {
    this.assignValues(this.currentRow, this.form.value);
    console.log(this.currentRow)
  }

  initialFormGroup() {
    var form = new FormGroup({});
    this.metadata.forEach(property => {
      var control = new FormControl('');
      form.addControl(property.name, control);
    });

    return form;
  }

  setFormGroupValue(item: any) {
    var data: { [key: string]: any } = {}
    this.metadata.forEach(property => {
      var value: any;

      if (item.hasOwnProperty(property.name)) {
        value = item[property.name];
      }

      data[property.name] = value;
    });

    this.form.patchValue(data);
  }

  assignValues(target: T, source: T): void {
    Object.assign(target, source);
  }
}
