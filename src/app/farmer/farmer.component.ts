import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Farmer } from './farmer.model';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css'],
  providers: [FarmerService]
})

export class FarmerComponent implements OnInit {
  farmerId: string;
  farmerToDisplay;

  constructor(
    private route: ActivatedRoute,
     private location: Location,
     private farmerService: FarmerService
     ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.farmerId = (urlParameters['id']);
    });  
    this.farmerToDisplay = this.farmerService.getFarmerById(this.farmerId);
  }

}
