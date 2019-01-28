const mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({

	reviewer: {type: String, required: true, minlength: 3},
    rating: {type: String, required: true, minlength: 1},
    comment: {type: String, required: true, minlength: 3}},
    {timestamps: true });

var CakeSchema = new mongoose.Schema(
{
    name: {type: String, required: true, minlength: 1},
    title: {type: String, required: true, minlength: 3},
    reviews: []},
    {timestamps: true }
    );

var Cake = mongoose.model('Cake', CakeSchema); // We are retrieving this Schema from our Models, named 'Cake'
// module.exports = {Cake:Cake};

var Review = mongoose.model('Review', ReviewSchema); // We are retrieving this Schema from our Models, named 'Review'
module.exports = {Review:Review, Cake:Cake};

// Use native promises (only necessary with mongoose versions <= 4)
// mongoose.Promise = global.Promise;

