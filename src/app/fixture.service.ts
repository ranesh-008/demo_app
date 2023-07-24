import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  apiBaseUrl:String=environment.apiURL;

  constructor(private http : HttpClient ) { }

  getMatchList(sports:any){
    return this.http.get<any>(this.apiBaseUrl+"/GetFixtures"+"?sports="+sports)
  }

  getSelectionList(sports:any){
    return this.http.get<any>(this.apiBaseUrl+"/GetSelections"+"?sports="+sports)
  }
  
  getMarketList(sports:any){
    return this.http.get<any>(this.apiBaseUrl+"/GetMarkets"+"?sports="+sports)
  }

  getBuilderList(sports:any, matchId:any,marketId:any,legs:any,language:any,body:any){
    return this.http.get<any>(this.apiBaseUrl+"/GetBetBuilderBets"+"?sports="+sports+"&matchId="+matchId+"&marketId="+marketId+"&legs="+legs+"&language="+language,body);

    // return this.http.post<any>(this.apiBaseUrl+"/GetBuilderBets/"+"?sports="+sports+"&matchId="+matchId+"&marketId="+marketId+"&legs="+legs+"&lenguage="+lenguage);
  }
}
