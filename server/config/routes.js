var mainController = require('../controllers/mainController');

module.exports = function(app){

// //retrieve all documents
// app.get('/cakes', mainController.index);

// //retrieve 1 document with name
// app.get('/cake/:id', mainController.view);

// create cake
app.post('/new', mainController.create);

app.get('/getAll', mainController.getAll);

app.get('/getCake/:id', mainController.getCake);

// // create review
app.put('/newReview/:id', mainController.createReview);

// // update  
app.put('/update/:id', mainController.update);

// //delete 
app.delete('/removeObj/:id', mainController.delete);

// //delete 
app.post('/removeReview/:id', mainController.deleteReview);


}