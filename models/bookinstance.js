var mongoose = require('mongoose');
const { DateTime } = require('luxon');
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
  }
);

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});
BookInstanceSchema
.virtual('due_back_formatted')
.get(function() {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED) //e.g Oct 6 2020
})

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);


// Luxon can import strings in many formats. 
//fromJSDate() = we use a JS date string and we make use of toLocaleString to format the output in English. 