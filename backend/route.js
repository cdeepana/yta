const libraryController = require('./Controllers/libraryController')

routeinitialize = (app) => {
    app.post('/saveAuthor', libraryController.saveAuthor),
    app.put('/updateAuthor', libraryController.updateAuthor), 
    app.get('/getAllAuthors', libraryController.getAllAuthors), 
    app.get('/getAuthorById', libraryController.getAuthorById),

    app.post('/saveBook',libraryController.saveBook),
    app.put('/updateBook',libraryController.updateBook),
    app.get('/getAllBooks',libraryController.getAllBooks)
    app.get('/getBookById',libraryController.getBookById)
}
module.exports = routeinitialize;