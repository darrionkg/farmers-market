import { Injectable } from '@angular/core';
import { Farmer } from './farmer/farmer.model';
import { FARMERS } from './farmer/mock-farmers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FarmerService {
  farmers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.farmers = database.list('farmers');
   }

  getFarmers() {
    return this.farmers;
  }

  addFarmer(newFarmer: Farmer) {
    this.farmers.push(newFarmer);
  }

  getFarmerById(farmerId: string){
    return this.database.object('farmers/' + farmerId);
  }
}
