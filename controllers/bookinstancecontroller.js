var BookInstance = require('../models/bookinstance');


//this controller method will make use of find() to find all the bookinstance objects. 

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res) {
    BookInstance.find()
    .populate('book') //populate('book') - will replace the book id stored for each record with a full book document.
    .exec((err, list_bookinstances) => { 
        if(err) {
            return next(err)
        }
        res.render('bookinstances_list', {
            title: 'book instances list',
            bookinstance_list: list_bookinstances,
        })
    })
};


// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};