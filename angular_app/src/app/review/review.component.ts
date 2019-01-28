import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

// import { HttpService } from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
  cake : any;
  review : any;


  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getCake(params['id']);
    });

    this.cake  = {
      name: "",
      title: "",
      reviews: ""
    }

    this.review = {
      reviewer:"",
      rating: 1,
      comment: ""
    }



  }
  //on task component html, make a form to submit and on the submit run the below function with an observable to update data to the db and run this emit after (inside the subscribe)
  //this data will be transferred to the parent who is listening for this event on the parent html.
  //once the data transfers to the parent from the emit, the parent will run a function defined on the same line.

  getCake(id){

    let observable = this._httpService.getCake(id);
    observable.subscribe(data => {
      this.cake = data['cake'][0];
    })

  }



  addReview(id){

    console.log("Component: "+id);
    console.log(this.review)

    let observable = this._httpService.addReview(id,this.review);
    observable.subscribe(data => {

      console.log("Data received from observable in component.")

    })

    // this.review = {
    //   rating: "",
    //   comment: ""
    // }
    this._router.navigate(['/']);



  }









  cancel(){
    this._router.navigate(['/']);
  }

}

