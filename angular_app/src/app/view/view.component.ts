import { HttpService } from 'src/app/http.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
	cake: any;
	review : any;
	average: any;



	
	constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { 
	}

	ngOnInit() {

		this.cake = {
			baker:"",
			imgurl:"",
			reviews:""
		}

		this._route.params.subscribe((params: Params) => {
			console.log(params['id']);
			this.getCake(params['id']);
		});


		this.review = {
			rating: "",
			comment: ""
		}

		this.average 

		// console.log(this._route.snapshot.params.id);

		// this.getAverage();
	}

	getCake(id){

		console.log(id);
		let observable = this._httpService.getCake(id);
		observable.subscribe(data => {

			this.cake = data['cake'][0];
			console.log(this.cake);
			console.log("Calculate Average Here.");

			var sum = 0;
			// console.log(this.cake.reviews.length);

			// console.log(this.cake.reviews[0].rating);

			for(var i = 0; i < this.cake.reviews.length;i++){
				sum = sum + parseInt(this.cake.reviews[i].rating);
			}
			console.log(sum);
			this.average = (sum/this.cake.reviews.length).toFixed(2);
			console.log(this.average);



		})
	}

	deleteReview(reviewId): void {

		console.log("Child component: ");

		for(var i = 0; i < this.cake.reviews.length; i++){


			console.log("In the for loop");

			if(this.cake.reviews[i]._id == reviewId){

				var temp = this.cake.reviews[i];
				this.cake.reviews[i] = this.cake.reviews[this.cake.reviews.length-1];
				this.cake.reviews[this.cake.reviews.length-1] = temp;
				this.cake.reviews.pop();

			}
		}

		console.log("Outside of for loop: ");
		console.log(this.cake);

		let observable = this._httpService.removeReview(this.cake._id,this.cake);
		observable.subscribe(data => {

			console.log("Review Component Observable:");
			console.log(data);
		})

		this.getCake(this.cake._id);

	}
	


	addReview(id){

		console.log("Component: "+id);
		console.log(this.review)

		let observable = this._httpService.addReview(id,this.review);
		observable.subscribe(data => {

			console.log("Data received from observable in component.")

		})

		this.review = {
			rating: "",
			comment: ""
		}

		this.getCake(id);


	}

  removeObj(id) {
    let observable = this._httpService.removeObj(id);
    observable.subscribe(data => {

    	    this._router.navigate(['/']);

    })


  }


	// getAverage(){

		// 	this.getCake(this._route.snapshot.params.id);
		// 	console.log(this.cake);


		// }




		// deleteReview(reviewId){

			// 	for(var i = 0; i< this.cake.reviews.length; i++){


				// 		if(this.cake.reviews[i]._id == reviewId){
					// 			var temp = this.cake.reviews[i];
					// 			this.cake.reviews[i] = this.cake.reviews[this.cake.reviews.length-1];
					// 			this.cake.reviews[this.cake.reviews.length-1] = temp;
					// 			this.cake.reviews.pop();
					// 		}

					// 	}
					// 	let observable = this._httpService.removeReview(this.cake._id,this.cake);
					// 	observable.subscribe(data => {
						// 		console.log("Review Component Observable: ");
						// 		this.cake = data['cake'];
						// 		console.log(this.cake);
						// 	})

						// }






					}











