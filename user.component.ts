import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { User } from './user.model';
import { BaseComponent } from './base.component';
import { Factory } from './factory';
import { Property } from './property';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  template: `<app-base [factory]="this" [metadata]="metadata"></app-base>`
})
export class UserComponent extends Factory<User> implements AfterViewInit, OnInit, OnDestroy{
  @ViewChild(BaseComponent)
  base: BaseComponent<User>
  title = 'demo-app';
  metadata;
  subscriptions: Subscription;

  constructor(){
    super(User)
    this.subscriptions = new Subscription();
    this.metadata = [{name:'name', type:'string'}]
  }
  ngOnDestroy(): void {
   this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.subscriptions.add(this.toranj.currentRow.propertyChanged.subscribe((prop: Property) => {
      console.log(`${prop.name} is changed to ${prop.value}`)
    }))

    this.toranj.currentRow.id = 2;
    this.toranj.currentRow.name = "Fariman";
  }
}
