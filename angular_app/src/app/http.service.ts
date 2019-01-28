import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private _http: HttpClient){
        this.getAll();
        // this.deleteTask();
        // this.addCake(cake);
    }

	getAll(){

		return this._http.get('/getAll');
	}

	// getTask(id){

	// // our http response is an Observable, store it in a variable

	// // let tempObservable = this._http.get('/tasks/:id');
	// // // subscribe to the Observable and provide the code we would like to do with our data from the response
	// // tempObservable.subscribe(data => 

	// // 	console.log("Got our one task!", data)

	// // 	);

	// 	return this._http.get('/tasks/'+id);
	// }

	// deleteTask(){
	// // our http response is an Observable, store it in a variable
	// let tempObservable = this._http.delete('/destroy/:id');
	// // subscribe to the Observable and provide the code we would like to do with our data from the response
	// tempObservable.subscribe(data => console.log("Delete this task!", data));
	// }


	getCake(id){

		console.log("http.service.ts");
		console.log(id);

		return this._http.get("/getCake/"+id);
	}



	addCake(cake){

		console.log("http.service.ts:")
		console.log(cake);
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/new', cake);  
}

	updateCake(id,updatedCake){

		console.log("http.service.ts:")
		console.log(updatedCake);
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.put('/update/'+id, updatedCake);  
}

	addReview(id,review){
		console.log("http.service.ts: id:" +id)
		console.log(review);

		return this._http.put('/newReview/'+id, review);
	}


	removeObj(id){
		console.log("http.service.ts:")
		console.log(id);
		return this._http.delete('/removeObj/'+id);
	}

	removeReview(id,obj){
		console.log("http.service.ts:")
		console.log(id);
		console.log(obj);
		return this._http.post('/removeReview/'+id,obj);
	}


}




