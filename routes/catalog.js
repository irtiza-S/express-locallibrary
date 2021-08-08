var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
//require the controllers
var book_controller = require('../controllers/bookcontroller')
var author_controller = require('../controllers/authorcontroller')
var bookinstance_controller = require('../controllers/bookinstancecontroller')
var genre_controller = require('../controllers/genrecontroller')

// book routes

// get the catalog home page
router.get('/', book_controller.index)

//get request for the create form 
router.get('/book/create', book_controller.book_create_get)

//post request for creating a book
router.post('/book/create', book_controller.book_create_post)

//get request for delete book
router.get('/book/:id/delete', book_controller.book_delete_get)

//post request for deleting book
router.post('/book/:id/delete', book_controller.book_delete_post)

//get request for updating book
router.get('/book/:id/update', book_controller.book_update_get)

//post request for updating book
router.post('/book/:id/update', book_controller.book_update_post)

//display one book 
router.get('/book/:id', book_controller.book_detail)

//display list of all books 
router.get('/books', book_controller.book_list)

// author routes

//creating authors must come before requesting specific authors via id
router.get('/author/create', author_controller.author_create_get)

//post request for creating authors
router.post('/author/create', author_controller.author_create_post)

//get request for deleting authors
router.get('/author/:id/delete', author_controller.author_delete_get)

//post request for deleting authors 
router.post('author/:id/delete', author_controller.author_delete_post)

//get request for updating authors
router.get('/author/:id/update', author_controller.author_update_get)

//post request for updating authors
router.post('/author/:id/update', author_controller.author_update_post)

//get request for one author 
router.get('/author/:id', author_controller.author_detail)

//get request for list of all authors 
router.get('/authors', author_controller.author_list)

// genre routes
//get request for creating genre form
router.get('/genre/create', genre_controller.genre_create_get)

//post request for creating genre
router.post('/genre/create', genre_controller.genre_create_post)

//get request for deleting genre form
router.get('/genre/:id/delete', genre_controller.genre_delete_get)

//post request for deleting genre 
router.post('/gnere/:id/delete', genre_controller.genre_delete_post)

//get request for updating genre form
router.get('/genre/:id/update', genre_controller.genre_update_get)

//post request for updating genre
router.post('/genre/:id/update', genre_controller.genre_update_post)

//get request to grab a specific genre
// router.get('/genre/:id', (req, res) => {
//     if( !mongoose.Types.ObjectId.isValid(id) ) return false;
// })
router.get('/genre/:id', genre_controller.genre_detail)
//get request to get all the genres
router.get('/genres', genre_controller.genre_list)

// bookinstance routes
//get request for creating bookinstance form
router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get)

//post request for creating bookinstance 
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post)

//get request for deleting bookinstance form
router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get)

//post request for deleting bookinstance
router.post('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_post)

//get request for updating bookinstance form
router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get)

//post request for updating bookinstance
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post)

//get request for a specific book instance
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail)

//get request for a list of all the book instances
router.get('/bookinstances', bookinstance_controller.bookinstance_list)

module.exports = router


/* this module requires express and then uses it to create a Router object - routes are all set up on the router which is then exported.

routes are defined with either GET or POSt requests.
handler functions are imported from the corresponding controllers. 
*/
