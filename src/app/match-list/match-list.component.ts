import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../fixture.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  sports:number=1;
  matchId:number=0;
  marketId:number=0;
  legs:number=0;
  lenguage:string='en';
  matchList: any;
  matchName: any;
  matchDate: any;
  view_match: boolean=true;
  countryName: any;
  leagueName: any;
  removeDuplicatesArrayById: any;
  country_name: any;
  matchTitle:string="Football";
  loading: boolean=false;
  nextDate: any=[];
  date_flag: boolean=false;
  matchSelectionList: any;
  matchMarketList: any;
  getBuilderNameList: any;
  getNameList :any=[]
  newList: any;

  constructor( private fixtureApi :FixtureService) { }

  ngOnInit(): void {
    this.getList();
    this.getSelectionList();
    this.getMarketList();
    this.ShowDate();

  }

  ShowDate(){
    for (let i = 0; i<7; i++) { 
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+ i);
    this.nextDate.push(tomorrow);
    // console.log('date',this.nextDate);
    }
  }
  getfilteredList(event:any){ 
    alert()
    this.date_flag =true;
    this.newList =event.target.value;
    // if(this.index == i && this.date_flag){
    //   this.index =null;
    //  }else{
    //    this.date_flag  = true;
    //    this.index = i;
    //  }
    console.log('date',this.newList);
    

  }
 
  getList(){ 
    this.loading=true;
    this.fixtureApi.getMatchList(this.sports).subscribe((res)=>{
    this.matchList=res.slice(0, 10  );;
    this.matchList.filter((item:any)=>{
      if(this.newList==item.MatchDate){
        this
      }
    })
    this.loading=false;
    this.country_name = this.matchList.Country;
    console.log('matchlist',this.matchList);
    
    },
    error=>{
    }
    )
  }
  back(){
    this.view_match=true;
  }
 
  viewMatch(id:any){
    this.view_match=false;
    this.matchList.filter((item:any)=>{
      if(item.MatchId ==id){
        // console.log('match',item.LeagueName);    
        this.matchName = item.MatchName;
        this.matchDate = item.KickOffUtc;
        this.countryName = item.Country;
        this.leagueName = item.LeagueName
        this.matchId = item.MatchId
      }
    })
    this.getBuilderList();

  }
  getSelectionList(){
    this.fixtureApi.getSelectionList(this.sports).subscribe((res)=>{
    this.matchSelectionList=res;
    },
    error=>{
    }
    )
  }
  getMarketList(){
    this.fixtureApi.getMarketList(this.sports).subscribe((res)=>{
    this.matchMarketList=res;
    },
    error=>{
    }
    )
  }
  getBuildersList(event:any){
    this.marketId = event.target.value;
    console.log('marketid',this.marketId); 
    this.getBuilderList();

  }
  getMarketsList(event:any){
    this.legs=event.target.value;
    console.log('legs',this.legs);
    this.getBuilderList();
  }

  getBuilderList(){
    this.fixtureApi.getBuilderList(this.sports, this.matchId, this.marketId, this.legs, this.lenguage,{}).subscribe((res)=>{
    this.getBuilderNameList=res;
    this.getNameList= this.getBuilderNameList.BetBuilderSelections
    console.log('betlist',this.getBuilderNameList.BetBuilderSelections);
    
    },
    error=>{
    }
    )
  }
}

