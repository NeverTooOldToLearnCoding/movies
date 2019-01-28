import { HttpService } from '../http.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	@Input() formToShow: any;
	@Output() updateEmitter = new EventEmitter();

	newCake : any;
  error : any;
  newReview: any;

  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { }

  ngOnInit() {
    this.newCake = { 
      name: "",
      title: "",
      reviews: []
    };

    this.newReview = { 
      reviewer: "",
      rating: 1,
      comment: ""
    };

    this.error = { 
      title: "",
      name: "",
      review:"",
      rating:""
    };



    // this.showAll();
  }

  // showAll(): void{
    //   let observable = this._httpService.getAll();

    //   observable.subscribe(data => {
      //     this.cakes = data['cakes'];

      //     console.log(this.cakes);

      //   }); 
      // }  

      addCake(){

        console.log("component:");
        console.log(this.newCake);

        console.log(this.newReview);
        
        this.newCake['name'] = this.newReview['reviewer'];


        let observable = this._httpService.addCake(this.newCake);
        observable.subscribe(data => {

          console.log("Within Observable:");
          console.log(data);

          if (data['error'] == null){

            // console.log(data['cake']);

            // console.log(data['cake']._id);
            // this.newCake = {
              //   baker: "",
              //   imgurl: ""
              // };

              let observable = this._httpService.addReview(data['cake']._id,this.newReview);
              observable.subscribe(data => {

                console.log("Within Observable:");
                console.log(data);

                if (data['error'] == null){
                  this.newCake = {
                    baker: "",
                    imgurl: ""
                  };

                  this.updateEmitter.emit(true);

                }else{



                  this.error = data['error']['message']; 

                }
              })

              this.updateEmitter.emit(true);

            }else{


              if(data['error']['errors']['name']){
                this.error['name'] = "Name is required for a movie."

              }

              if(data['error']['errors']['title']){
                this.error['title'] = "Title is required for a movie."
              }

              this.error['rating'] = "Rating is required for a movie."
              this.error['review'] = "Review is required for a movie."



              // console.log(data['error']['messsage']);
              // console.log(data['error']['errors']['name']);
              // console.log(data['error']['errors']['title']);
              // this.error = data['error']['message']; 

            }
          })
      }
      cancel(){
        this.updateEmitter.emit(true);

      }




    }
