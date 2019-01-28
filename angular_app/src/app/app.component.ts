
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  cakes : any;
  selectedCake : any;

  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute){
  }

  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){

  }



  // }





  // removeCake(id: Number): void{

    //     console.log("component:");

    //   let observable = this._httpService.removeCake(id);
    //   observable.subscribe(data => {
      //     this.showAll();
      //   })
      // }
      






    }

