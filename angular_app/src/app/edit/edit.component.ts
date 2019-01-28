import { HttpService } from '../http.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
	cakes : any ;
	@Input() childComponentVariable : any;
	@Output() dataGoingToParent = new EventEmitter();

	constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { }

	ngOnInit() {

	}

	updateCake(childId){
		console.log(childId);
		console.log(this.childComponentVariable);
		let observable = this._httpService.updateCake(childId, this.childComponentVariable);
		observable.subscribe(data => {
			console.log("Within Observable:");
			console.log(data);
			console.log(this.dataGoingToParent.emit(true));
			this.dataGoingToParent.emit(true);
			// this.showAll();
		})
	}

	// showAll(){
	// 	let observable = this._httpService.getAll();
	// 	observable.subscribe(data => {
	// 		this.cakes = data['cakes'];
	// 	})
	// }




	// addCake(){

		// 	console.log("component:");
		// 	console.log(this.newCake);

		// 	let observable = this._httpService.addCake(this.newCake);
		// 	observable.subscribe(data => {

			// 		console.log("Within Observable:");
			// 		console.log(data);

			// 		if (data['error'] == null){
				// 		}else{
					// 			this.error = data['error']['message'];         
					// 		}


					// 		console.log(this.error);

					// 		this.newCake = {
						// 			baker: "",
						// 			imgurl: ""
						// 		};

						// 		this.updateEmitter.emit(true);
						// 	})
						// }




}
