var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stuSchema = new Schema({name: String, age: Number, gender: String});
module.exports = mongoose.model("One", stuSchema, "firstClass");
