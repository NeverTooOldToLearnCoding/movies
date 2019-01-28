import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cakes : any;
  newReview : any;
  showForm = false;
  // showEditForm = false;
  parentVariable: any;
  average : any;

  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { }

  ngOnInit() {

    this.cakes = [];
    this.showAll();
  }

  showCreate(){
    this.showForm = true;
  }

  showAll() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.cakes = data['cakes'];
      // console.log(this.cakes[0]);
      // console.log(this.cakes[1]);
      // console.log("Cake List Total:"+this.cakes.length);
      // console.log(this.cakes[0].reviews[0].rating);

      // console.log(this.cakes[0].reviews[1].rating);

      // console.log("Rating list Total for first Cake:"+this.cakes[0].reviews.length)
      // console.log("Rating list Total for second Cake:"+this.cakes[1].reviews.length)

      var sum = 0;
      console.log("Calculate Average Here:");

      for(var i = 0; i<this.cakes.length;i++){
        console.log("Inside first for loop");
        var sum = 0;

        for(var j = 0; j<this.cakes[i].reviews.length;j++){

          console.log("Inside 2nd for loop");
          sum = sum + parseInt(this.cakes[i].reviews[j].rating);
          console.log(sum);
        }
        //  console.log("Calculating average and pushing");
        // this.average = {average:(sum/this.cakes[i].reviews.length)};
        this.average = sum/this.cakes[i].reviews.length;
        this.cakes[i]['average'] = this.average;
        // .push(this.average);
        // console.log(this.average);
        // console.log("Finished: "+ this.cakes);
      }
      // console.log("Finished: "+ this.cakes[0]);
    })

  }      

  functionAfterChildDataReceived(event){
    console.log(event);
    if(event == true){
      this.showForm = false;
      this.showAll();

    }
  }

  hideEditForm(event){
    console.log("Outside of HideEditForm");
    console.log(event);
    if(event == true){
      console.log("Within If of HideEditForm");
      console.log(this.parentVariable);
      this.parentVariable = null;
      this.showAll();

    }
  }

  onButtonClickShowForm(id) {
    console.log("On Button Click Show Form Component");
    console.log(id);
    let observable = this._httpService.getCake(id);
    observable.subscribe(data => {
      this.parentVariable = data['cake'][0];
      console.log("Return values from database.")
      console.log(data['cake'][0]);
      console.log(this.parentVariable);
    })
  }

  removeObj(id) {
    let observable = this._httpService.removeObj(id);
    observable.subscribe(data => {
      this.showAll();
    })


  }
}