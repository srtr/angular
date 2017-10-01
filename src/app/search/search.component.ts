import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SearchService, SearchModel } from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchService: SearchService;
  searchObj: SearchModel;

  marketsList: string[];
  clientsList: string[];
  orderSides: string[];
  orderTypes: string[];
  showClients: boolean;
  showOrders: boolean;
  clientMarketMap: Map<string, string[]>;

  public searchForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder, searchService: SearchService) {
    this.searchService = searchService;
    this.clientMarketMap = searchService.getclientMarketMap();
    this.orderSides = searchService.getOrderSides();
    this.orderTypes = searchService.getOrderTypes();
  }
  private initState(showClients,showOrders){
    this.clientsList = this.clientMarketMap.get(this.marketsList[0]);
    this.searchForm = this._fb.group({
      market: [this.marketsList[0], [<any>Validators.required]],
      client: [''],
      orderSide: [''],
      orderType: [''],
      orderPrice: [''],
      orderQuantity: [''],
      showClients: [showClients],
      showOrders: [showOrders]
    });
  }

  ngOnInit() {
    this.marketsList = Array.from(this.clientMarketMap.keys());
    this.initState(true,true);
  }

  marketChange(newMarket) {
    this.clientsList = this.clientMarketMap.get(newMarket);
  }

  search(model: SearchModel, isValid: boolean) {
    this.submitted = true; 
    console.log("submitted");
  }

  resetForm() {
    console.log("Resetting form");
    let oldState_showClients = this.searchForm.value.showClients;
    let oldState_showOrders = this.searchForm.value.showOrders;
    this.searchForm.reset();
    this.initState(oldState_showClients,oldState_showOrders);
  }
}
