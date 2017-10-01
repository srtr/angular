import { Injectable } from '@angular/core';


let marketsList=["hnk","twn","jpn"];
let clientList1=["hnk_1","hnk_2","hnk_3"];
let clientList2=["twn_1","twn_2","twn_3"];
let clientList3=["jpn_1","jpn_2","jpn_3"];
let clientsMarketMap= new Map<string,string[]>();
clientsMarketMap.set(marketsList[0],clientList1);
clientsMarketMap.set(marketsList[1],clientList2);
clientsMarketMap.set(marketsList[2],clientList3);
let orderSide=["Buy","Sell"];
let orderType=["1","2","3","4","5","6","7"];

export class SearchModel{
    Market: string;
    Client?: string;
    OrderPrice?: number;
    OrderQuantity?: number;
    OrderSide?: string;
    OrderType?: string;
    showOrders: boolean;
    showClients: boolean;
}

@Injectable()
export class SearchService {
    getclientMarketMap(){
        return clientsMarketMap;
    }
    getOrderSides(){
        return orderSide;
    }
    getOrderTypes(){
        return orderType;
    }
    
}