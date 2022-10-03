const Books = require("../models/Books");
const Author = require("../models/Author");

module.exports = {

  saveAuthor: async (req, res) => {
    let reqBody = req.body;
    console.log("body", reqBody);
    let authorQuery = {
      'first_name': reqBody.fname,
      'last_name': reqBody.lname,
    };
    let isAlreadyExist = await Author.findOne(authorQuery);
    let newAuthor = new Author(authorQuery);
    if (!isAlreadyExist) {
      newAuthor.save();
      res.json({ response: "created author" });
    } else {
      console.log("author already existed");
      res.json({ respons: "author already existed" });
    }
    return;
  },

  updateAuthor: async (req, res) => {
    let reqBody = req.body;
    console.log("body", reqBody);
    let isExistAuthor = await Author.findOne({ _id: reqBody.id });

    if (!isExistAuthor) {
      return res.json({ response: "author not found" });
    } else {
      isExistAuthor.first_name = reqBody.fname;
      isExistAuthor.last_name = reqBody.lname;
      isExistAuthor.save();
      console.log("author updated");
      return res.json({ respons: "author updated" });
    }
  },

  getAllAuthors: async (req, res) => {
    let response = await Author.find();
    console.log("response all Author", response);
    if (response.length) {
      return res.json({ response: response });
    } else {
      return res.json({ response: "no data Author" });
    }
  },

  getAuthorById: async (req, res) => {
    let authorId = req.query.id;
    let response = await Author.findOne({ _id: authorId });
    console.log("response", response);
    if (response) {
      return res.json({ response: response });
    } else {
      return res.json({ response: "no data Author 11" });
    }
  },

  saveBook: async (req, res) => {
    let reqBody = req.body;
    console.log("book body", reqBody);
    let bookQuery = {
      name: reqBody.name,
      isbn: reqBody.isbn,
    };
    let isAlreadyExist = await Books.findOne(bookQuery);
    bookQuery.authorBy = reqBody.authorBy;
    let newBook = new Books(bookQuery);
    if (!isAlreadyExist) {
      newBook.save();
      res.json({ response: "created book" });
    } else {
      console.log("book already existed");
      res.json({ respons: "book already existed" });
    }
    return;
  },

  updateBook: async (req, res) => {
    let reqBody = req.body;
    console.log("book body", reqBody);

    let isExist = await Books.findOne({ _id: reqBody.id });
    if (isExist) {
      isExist.name = reqBody.name;
      isExist.isbn = reqBody.isbn;
      isExist.authorBy = reqBody.authorBy;
      isExist.save();
      res.json({ response: "updatd book" });
    } else {
      console.log("book not found");
      res.json({ respons: "book not found" });
    }
    return;
  },

  getAllBooks: async (req, res) => {
    let response = await Books.find().populate("authorBy");
    console.log("response all books", response);
    if (response.length) {
      return res.json({ response: response });
    } else {
      return res.json({ response: "no data books" });
    }
  },

  getBookById: async (req, res) => {
    let bookId = req.query.id;
    let response = await Books.findOne({ _id: bookId }).populate("authorBy");
    console.log("response book", response);
    if (response) {
      return res.json({ response: response });
    } else {
      return res.json({ response: "no data book" });
    }
  },
};
