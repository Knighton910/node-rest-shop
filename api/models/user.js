const mongoose = require('mongoose')
const schema = mongoose.Schema({name: String});

console.log(
    // true
    schema.path('name') instanceof mongoose.SchemaType
);
console.log(
    // String
    schema.path('name').instance
);
console.log();
console.log();
