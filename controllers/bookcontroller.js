var Book = require('../models/book');
var Author = require('../models/author')
var Genre = require('../models/genre')
var BookInstance = require('../models/bookinstance')

var async = require('async');
const author = require('../models/author');

//the index controller needs to fetch information about how many books, bookinstances, authors and genres records we have in the database. 
//We will make use of the countDocuments() method to get the number of instances of each model. This method is called on models - with an optional set of conditions to match against in the first argument. The second argument is a callback which will return the number of documents - this callback is called when the count is returned from the database. The callback looks like - (err, value). 
//Example:
//SomeModel.countDocuments({aModelField: 'match-value'}, (err, value) => {
    //do something if there's an error. 
    //do something with the count if there was no error.
//})

exports.index = function(req, res) {
    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback) //pass an empty object as the match condition - to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback)
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status: 'Available'}, callback)
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback)
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback)
        },
    }, (err, results) => {
        res.render('index', { title: 'Local library Home', error: err, data: results})
    })

};

// Display list of all books.
//this controller method makes use of .find() to return all the book objects - only returning the title and author properties. 
//The controller method will also make use of populate() specifying the author field to replace the stored book id with the author's full details. 
exports.book_list = function(req, res) {
    Book.find({}, 'title author')
        .populate('author')
        .exec(function(err, list_books) {
            if(err) {
                return next(err)
            }
            res.render('book_list', {
                title: 'Book list',
                book_list: list_books
            })
        })
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};

//async.parallel is called on an object with functions which are responsible for the counts of each model. 
//they start at the same time as each other, when they all complete then the final callback is called rendering the index.pug file with the corresponding data/
