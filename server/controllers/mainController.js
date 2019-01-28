// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');

var model = require("../models/cakes");

var Cake = model.Cake;
var Review = model.Review;


module.exports = {

   //  index: function(req, res) {

	  // Cake.find({}).sort({updatedAt:'desc'}).exec(function(err, cakes) {
	  //   if(err) {
	  //     console.log("Returned error", err);
	  //     res.json({message: "Error", error: err})
	  //   }else{
	  //   	res.json({message: "Success", cakes})
	  //   }
	  // })	// code...
	  
   //  },

	// view: function(req, res) {
	// 	// code...
	// 	  Cake.find({_id:req.params.id}).sort({updatedAt:'desc'}).exec(function(err, cake) {
	// 	    if(err) {
	// 	      console.log("Returned error", err);
	// 	      res.json({message: "Error", error: err})
	// 	    }else{
	//     		res.json({message: "Success", cake})		    	
	// 	    }
	// 	  })

	// }
	getAll: function(req,res){

		Cake.find({}, function(err, cakes){
			if(err){
				res.json({message:"err"})
			} else {
				res.json({message:"success", cakes})
			}
		})
	},

	getCake: function(req,res){

		Cake.find({_id:req.params.id}).sort({updatedAt:'desc'}).exec(function(err, cake){
			if(err){
				res.json({message:"err"})
			} else {
				res.json({message:"success", cake})
			}
		})
	},


	// getCake: function(req, res) {
	// 	// code...
	// 	  Cake.find({_id:req.params.id}).sort({reviews:{rating:'desc'}}).exec(function(err, cake) {
	// 	    if(err) {
	// 	      res.json({message: "Error"})
	// 	    }else{
	//     		res.json({message: "Success", cake})		    	
	// 	    }
	// 	  })

	// },





    create: function(req, res) {
    	// code...
		  // create a new User with the name and age corresponding to those from req.body
		  // console.log(req.json);

		  console.log("Main Controller:");

		  console.log(req.body);

		  var cake = new Cake(req.body);

		  console.log(cake);

		  cake.save(function(err,cake){

		        if(err){

			      res.json({message: "Error", error: err})
		        }
		        else {
		        	console.log("Works");
		            res.json({message: "Success", cake})
		        }
		    })
    },


        createReview: function(req, res) {
    	// code...
		  // create a new User with the name and age corresponding to those from req.body
		  // console.log(req.json);

		  console.log("Main Controller:");

		  console.log(req.body);
		  console.log(req.body.rating);
		  console.log(req.body.comment);

		  // console.log(req.params.id);

		  var review = new Review(req.body);
		  // console.log(review);

		Cake.updateOne({_id:req.params.id}, 
			{$push:{reviews:review}}, function(err,cake){
		// This code will run when the DB has attempted to update the matching record.
		if(err){
			res.json({message: "Error", error: err})
		}else{
			res.json({message: "Success",cake})
		}
		})
    },

    // create: function(req, res) {
    // 	// code...
		  // // create a new User with the name and age corresponding to those from req.body
		  // // console.log(req.json);

		  // var cake = new Tasks(req.body);

		  // task.save(function(err,cake){

		  //       if(err){

			 //      res.json({message: "Error", error: err})
		  //       }
		  //       else {
		  //           res.json({message: "Success", cake})
		  //       }
		  //   });
    // },



    update: function(req, res) {
    	// code...
		  // create a new User with the name and age corresponding to those from req.body
		  console.log("Main Controller:");

	  Cake.updateOne({_id:req.params.id}, 
	    {$set:{baker:req.body.baker,imgurl:req.body.imgurl}}, function(err){
	 // This code will run when the DB has attempted to update the matching record.
	   if(err){
	   		res.json({message: "Error", error: err})
	   }else{
	   		res.json({message: "Success"})
	    }
	  })

    },

    delete: function(req, res) {
    	// code...
    	console.log("Main Controller");
		Cake.deleteOne({_id:req.params.id},function(err){
		if(err) {

			res.json({message: "Error", error: err})
		}else{
			res.json({message: "Success"})
			}
		})
    },

    deleteReview: function(req, res) {

    	// code...
    	console.log("Main Controller.");
     	console.log("Cake Id: " + Object(req.params.id));

     	console.log("Review Id: " + Object(req.body.cake));
     	// console.log(req.body);
     	// console.log(req.body.baker);
     	// console.log(req.body.imgurl);
     	// console.log(req.body.reviews);
     	// console.log(req.body._id);
     	// console.log(req.body.cakeId);
     	// console.log(req.params.cakeId);

     	Cake.updateOne({_id : req.params.id}, {$set:{baker:req.body.baker,imgurl:req.body.imgurl, reviews:req.body.reviews}}, function(err, cake){
     		if (err){
     			res.json({message: "Error", error: err})
     		}else{
     			console.log("return cake",cake);
     			res.json({message: "Success", cake})
     		}
     	})

     }

     // 	Cake.updateOne({_id : Object(req.params.cakeId)}, {$pull : {reviews : {_id : Object(req.params.reviewId)}}}, function(err, review){
     // 		if (err){
     // 			res.json({message: "Error", error: err})
     // 		}else{
     // 			console.log("return cake",review);
     // 			res.json({message: "Success", review})
     // 		}
     // 	})

     // }

};
