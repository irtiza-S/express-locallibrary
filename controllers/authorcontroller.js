var Author = require('../models/author') //import the authors module - for access


//display all the authors
exports.author_list = function(req, res) {
    Author.find() //used to find all author objects in the database. 
    .sort([['family_name', 'ascending']]) //sorted by family name in alpha order.
    .exec(function(err, list_authors) {
        if(err) {
            return next(err) //the next middleware function is called with the error value. 
        }
        res.render('author_list', {
            title: 'Author List',
            author_list: list_authors
        })
    })
}

//display author detail page for a specific author
exports.author_detail = function(req, res) {
    res.send('author detail: ' + req.params.id)
}

//display the author create form
exports.author_create_get = function(req, res) {
    res.send('author create GET')

}

//handle author create form - POST
exports.author_create_post = function(req, res) {
    res.send('author create POST')
}

//display author delete form
exports.author_delete_get = function(req, res) {
    res.send('author delete GET')
}

//handle deleted author on POST
exports.author_delete_post = function(req, res) {
    res.send('author delete POST')
}

//display update author form
exports.author_update_get = function(req, res) {
    res.send('author update GET')
}

//handle updated author on POST
exports.author_update_post = function(req, res) {
    res.send('author update POST')
}



/* 
Notes on this script
we first import the module we will be using to access and update the date from. 
Then we export functions for each of the URLs to handle CRUD. 
these CRUD operations come in the format of forms - using the POST http method to handle create, updating, and deleting authors. 

In these route callback functions we don't make use of next() since they all send response back to the client. 
*/