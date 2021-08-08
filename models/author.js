var mongoose = require('mongoose');
const { DateTime } = require('luxon')
var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

AuthorSchema
.virtual('dob')
.get(function() {
  return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : ''
})

//Export model
module.exports = mongoose.model('Author', AuthorSchema);


//we have declared virtual properties for the AuthorSchema named 'url' which returns the absolute URL required to get a particular instance of the model - we'll use the property in our templates whenever we need to get a link to a particular author.

//This is considered a good idea because then the URL for an item only ever needs to be changed in one place. 
