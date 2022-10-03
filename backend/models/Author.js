const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const AuthorModelSchema = new Scheme({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Author', AuthorModelSchema);