import { Component, OnInit } from '@angular/core';
import {Farmer } from '../farmer/farmer.model';
import { FarmerService} from '../farmer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FarmerService]
})
export class AdminComponent implements OnInit {

  constructor(private farmerService: FarmerService) { }

  ngOnInit() {
  }

  submitForm(name: string, produce: string, description: string) {
    var newFarmer: Farmer = new Farmer(name, produce, description);
    console.log(newFarmer);
    this.farmerService.addFarmer(newFarmer);
  }
}
