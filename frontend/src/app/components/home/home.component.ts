import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/services/library-service.service';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  libraryBookList: any;
  authorList: any;
  bookInfo: Book = {
    name: '',
    isbn: '',
    authorBy: null
  };
  author: Author = {
    fname: '',
    lname: '',
    id: null
  };
  constructor(private libService: LibraryServiceService) { }

  ngOnInit(): void {
    this.libService.getAllBooks().subscribe(
      response => {
        console.log("response : ", response);
        this.libraryBookList = response.response;
      },
      error => {
        console.log("error oocccured");
      }
    )
    this.libService.getAllAuthors().subscribe(
      response => {
        this.authorList = response.response
        console.log("this.authorList", this.authorList);
      },
      error => {
        console.log("error occurd");
      }
    )
  }

  OpenBookDetails(data: any): void {
    this.bookInfo.name = data.name;
    this.bookInfo.isbn = data.isbn;
    this.bookInfo.authorBy = data.authorBy.first_name
    console.log("bookViewInfo", this.bookInfo);
  }

  saveAuthor(): void {
    const myInput = document.getElementById('notify')
    myInput.focus();
    this.libService.saveAuthor(this.author).subscribe(
      response => {
        console.log("res =>", response);
        this.ngOnInit();
      },
      error => {
        console.log("errror");
      }
    )
  }

  saveBook(): void {
    console.log("bookkkkk -->", this.bookInfo);
    this.libService.saveBook(this.bookInfo).subscribe(
      res => {
        console.log("book savd");
        this.ngOnInit();
      },
      error => {
        console.log("error occurred");
      }

    )
    this.bookInfo = {
      name: '',
      isbn: '',
      authorBy: null
    }
  }

  getAuthorFromDropList(value): void {
    this.bookInfo.authorBy = value._id;
  }

}
